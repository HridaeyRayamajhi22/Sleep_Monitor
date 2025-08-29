import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest'

export default function Home() {
  return (
    <div className='text-red-700'>
       Home Page is this after all
    </div>
  )
}
