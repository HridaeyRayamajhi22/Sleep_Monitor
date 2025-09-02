
'use server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

interface RecordData {
  text: string
  amount: number
  date: string
}

interface RecordResult {
  data?: RecordData
  error?: string
}

async function addSleepRecord(formData: FormData): Promise<RecordResult> {
  const textValue = formData.get('text')
  const amountValue = formData.get('amount')
  const dateValue = formData.get('date')

  if (!textValue || !amountValue || !dateValue) {
    return { error: 'Text, amount or date is missing' }
  }

  const text = textValue.toString()
  const amount = parseFloat(amountValue.toString())
  let date: string

  try {
    date = new Date(dateValue.toString()).toISOString()
  } catch {
    return { error: 'Invalid date format' }
  }

  // Get logged-in user from Clerk
  const user = await currentUser()
  if (!user) return { error: 'User not found' }

  const userId = user.id
  const email = user.emailAddresses?.[0]?.emailAddress
  if (!email) return { error: 'User email not found' }

  try {
    // Ensure user exists in the database
    let dbUser = await db.user.findUnique({ where: { id: userId } })
    if (!dbUser) {
      dbUser = await db.user.create({
        data: {
          id: userId,
          clerkUserId: userId,
          email,
          name: user.firstName + ' ' + (user.lastName || ''),
          image: user.imageUrl,
        },
      })
    }

    // Check if a record for the same date exists
    const existingRecord = await db.record.findFirst({
      where: { userId, date },
    })

    let recordData: RecordData

    if (existingRecord) {
      // Update existing record
      const updatedRecord = await db.record.update({
        where: { id: existingRecord.id },
        data: { text, amount },
      })

      recordData = {
        text: updatedRecord.text,
        amount: updatedRecord.amount,
        date: updatedRecord.date?.toISOString() || date,
      }
    } else {
      // Create new record
      const createdRecord = await db.record.create({
        data: {
          text,
          amount,
          date,
          userId, // Must match User.clerkUserId if FK is set that way
        },
      })

      recordData = {
        text: createdRecord.text,
        amount: createdRecord.amount,
        date: createdRecord.date?.toISOString() || date,
      }
    }

    revalidatePath('/')
    return { data: recordData }
  } catch (error) {
    console.error('Error adding sleep record:', error)
    return { error: 'An unexpected error occurred' }
  }
}

export default addSleepRecord
