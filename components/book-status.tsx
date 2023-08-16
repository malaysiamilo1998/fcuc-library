import React from 'react'

type pageProp = { bookStatus: string }

export function AlertText ({ bookStatus }: pageProp) {
  return (
    <div role='alert'>
      <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>
        {bookStatus}
      </div>
      <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
        <p>Expired, please pay fine RM 0.90</p>
      </div>
    </div>
  )
}

export function WariningText ({ bookStatus }: pageProp) {
  return (
    <div
      className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4'
      role='alert'
    >
      <p className='font-bold'>{bookStatus}</p>
      <p>This book will be expired withing 2 days</p>
    </div>
  )
}

export function CheckedoutText ({ bookStatus }: pageProp) {
  return (
    <div
      className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md'
      role='alert'
    >
      <div className='flex'>
        <div className='py-1'></div>
        <div>
          <p className='font-bold'>{bookStatus}</p>
        </div>
      </div>
    </div>
  )
}
