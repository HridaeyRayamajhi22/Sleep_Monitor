import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest'
import AddNewRecord from '@/components/AddNewRecord'

export default async function Home() {
  const user = await currentUser()
  if(!user) {
    return <Guest />
    
  }
  return (
   <main className=''>
    <div className=''>
      {/* Left column */}
      <div className=''>
        <div className=''>
          {/* User Image */}
          <img src={user.imageUrl} alt={`${user.firstName}&#39;s profile`} className='' />

          {/* User Details */}
          <div className=''>
            <h2>Welcome back, {user.firstName} an imojis</h2>
            <p>Here is a quick overview of your activity abd blah blah</p>

            <div className=''>
               <p className=''>
                  <span className=''>Joined: </span>{' '}
                  {new Date(user.createdAt).toLocaleDateString()}
               </p>
               <p>
                <span>
                  Last Active
                </span>{' '}
                {user.lastActiveAt ? new Date(user.lastActiveAt).toLocaleString(): 'N/A'}
               </p>
            </div>
          </div>
        </div>

        {/* Place holders for AddSracping Task */}
        <AddNewRecord />
      </div>
    </div>
   </main>
  )
}
