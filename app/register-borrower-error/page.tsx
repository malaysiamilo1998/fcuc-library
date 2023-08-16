'use client'
import React from 'react'
import { Input } from '@nextui-org/react'
import Image from 'next/image'
import { Button, ButtonGroup } from '@nextui-org/react'
import RegisterExist from '@/components/register-exist'

export default function Register () {
  const validationState = 'invalid'
  return (
    <div className='w-3/5'>
      <div className='flex  justify-center items-center w-full m-5'>
        <Image
          src='/assets/images/fcuc-logo.png'
          width='150'
          height='75'
          alt='fcuc logo'
        />
        <div className='font-extrabold w-full  m-3  '>Register a borrower</div>
      </div>

      <form className=' space-y-3'>
        <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
          <Input
            type='email'
            label='Student`s Name'
            placeholder='Student`s Name'
            size='lg'
            color={validationState === 'invalid' ? 'danger' : 'success'}
            errorMessage={
              validationState === 'invalid' &&
              'Please enter a valid student name'
            }
            validationState={validationState}
          />
        </div>
        <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
          <Input
            type='email'
            label='Student ID'
            placeholder='Student`s ID'
            size='lg'
            color={validationState === 'invalid' ? 'danger' : 'success'}
            errorMessage={
              validationState === 'invalid' &&
              'Please enter a valid student ID example: B1998'
            }
            validationState={validationState}
          />
        </div>
        <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
          <Input
            type='email'
            label='Email'
            placeholder="Student's email"
            size='lg'
          />
        </div>
        <div className='flex justify-start space-x-4'>
          <Button color='primary'>Register</Button>
          <Button color='danger'>clear </Button>
        </div>
      </form>
    </div>
  )
}
