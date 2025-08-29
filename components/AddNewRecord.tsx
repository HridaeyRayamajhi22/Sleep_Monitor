"use client"
import React, { useReducer, useRef, useState } from 'react'
import addSleepRecord from '@/app/actions/addSleepRecord'

const AddNewRecord = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [amount, setAmount] = useState(6)
    const [alertMessage, setAlertMessage] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<'success' | 'error' | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [sleepQuality, setSleepQuality] = useState('')

    const clientAction = async (formData:FormData) => {
        setIsLoading(true)
        setAlertMessage(null)

        formData.set('amount', amount.toString());
        formData.set('text', sleepQuality)

        const {error} = await addSleepRecord(formData)
    }
  return (
    <div>
      
    </div>
  )
}

export default AddNewRecord
