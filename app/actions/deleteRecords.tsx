'use server'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

async function deleteRecord(recordId: string): Promise<{
  message?: string
  error?: string
}> {
  const { userId } = await auth()

  if (!userId) {
    return { error: 'User not found' }
  }

  try {
    // Verify record ownership
    const record = await db.record.findUnique({
      where: { id: recordId },
    })

    if (!record || record.userId !== userId) {
      return { error: 'Record not found or not authorized' }
    }

    await db.record.delete({
      where: { id: recordId },
    })

    revalidatePath('/') // Refresh the cache/page

    return { message: 'Record deleted' }
  } catch (error) {
    console.error('Error deleting record', error)
    return { error: 'Database error' }
  }
}

export default deleteRecord
