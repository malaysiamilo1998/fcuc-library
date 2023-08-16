'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
// import Link from 'next/link'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { AlertText, WariningText, CheckedoutText } from './book-status'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider
} from '@nextui-org/react'
import { book } from '@/types/book'
export default function BookWithStatus ({
  id,
  bookStatus,
  bookName,
  dueDate,
  bookDesc,
  image
}: book) {
  return (
    <Card className='w-4/5 mb-3'>
      <CardHeader className='flex gap-3'>
        <Image alt='book image' width={95} height={217} src={image} />
        <div className='flex flex-col'>
          <div className='mb-3'>
            {bookStatus == 'Due for Return' ? (
              <AlertText bookStatus={bookStatus} />
            ) : bookStatus == 'Currently Borrowed' ? (
              <CheckedoutText bookStatus={bookStatus} />
            ) : (
              <WariningText bookStatus={bookStatus} />
            )}
          </div>
          <p className='text-small text-default-500'>{bookName}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Accordion variant='light'>
          <AccordionItem key={`book-desc-${id}`} title={bookName}>
            <p>{bookDesc}</p>
          </AccordionItem>
        </Accordion>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className='flex justify-between w-full items-center'>
          <p>{dueDate}</p>
          <div className='flex space-x-2'>
            <Button color='warning'>Lost</Button>
            <Button color='danger'>Damage</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
