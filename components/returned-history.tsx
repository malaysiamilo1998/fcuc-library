import React from 'react'
import { book } from '@/types/book'
import Image from 'next/image'
export default function ReturnedItem ({
  image,
  bookStatus,
  bookName,
  bookDesc,
  dueDate
}: book) {
  return (
    <div className='flex justify-between m-6 space-x-3 border border-gray-100 shadow-xl p-3'>
      <Image src={image} width='95' height={65} alt='book image' />
      <div className='grow'>
        <p>{bookName}</p>
        <div
          className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
          role='alert'
        >
          <p className='text-sm'>{bookStatus}</p>
        </div>
        <p className='font-extralight text-sm p-3'>{dueDate}</p>
      </div>
    </div>
  )
}
