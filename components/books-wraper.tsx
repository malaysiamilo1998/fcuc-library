'use client'
import React from 'react'
import BookWithStatus from './book-with-status'
import { book } from '@/types/book'
import { NextUIProvider } from '@nextui-org/react'
type pageProp = {
  books: book[]
}
export default function BookWraper ({ books }: pageProp) {
  return (
    <NextUIProvider>
      <div className=''>
        {books.map((bok: book) => (
          <BookWithStatus key={bok.id} {...bok} />
        ))}
      </div>
    </NextUIProvider>
  )
}
