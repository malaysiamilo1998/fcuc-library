'use client'
import React from 'react'
import BookWraper from '@/components/books-wraper'
import { book } from '@/types/book'
import ModalAlert, {
  ModalAlertLimit5,
  SuccessCheckout
} from '@/components/modal'
import { Pagination } from '@nextui-org/react'
import Image from 'next/image'
import ReturnedItem from '@/components/returned-history'
import LostDamageFineModal from '@/components/lost-damage-fine-modal'
import BlackListModal from '@/components/black-list-modal'
import BlackListFineModal from '@/components/black-list-fine-modal'

const books: book[] = [
  {
    id: 1011,
    bookDesc:
      'This book explores the Scrum methodology of project management. This method is a framework for efficiently executing complex projects in a short span of time. The guiding philosophy behind Scrum is that customers often change their minds, causing product teams to pivot and adapt gracefully to deliver solutions in short periods of time. Though pioneered in the software industry, the principles of Scrum have popped up across various disciplines such as education, marketing, sales, engineering, finance, and legal. Jeff Sutherland is one of the co-creators of Scrum and JJ Sutherland is the CEO of Scrum, Inc, meaning readers learn directly from two of the topmost subject experts.',
    bookName:
      'Scrum: The Art of Doing Twice the Work in Half the Time by Jeff Sutherland and J.J. Sutherland',
    dueDate: '2023-08-14',
    bookStatus: 'Due for Return',
    image: '/assets/images/pm-textbook-1.jpg'
  },
  {
    id: 1012,
    bookDesc:
      'One of the best project management books for beginners is Gregory M. Horine’s Project Management Absolute Beginner’s Guide. The book explores the essential qualities of successful project leaders, identifies common missteps of first time project managers, and provides comprehensive guidance on how to handle various tasks. The writing style is straightforward and simple, and each chapter contains easy to understand charts and diagrams that illustrate key concepts.',
    bookName:
      'A Guide to the Project Management Body of Knowledge by Project Management Institute',
    bookStatus: 'Currently Borrowed',
    dueDate: '2023-08-26',
    image: '/assets/images/pm-textbook-2.jpg'
  },
  {
    id: 1013,
    bookDesc:
      'Fundamentals of Project Management is a great resource for newcomers looking to increase knowledge and build skills. The book covers basics such as understanding the role of project managers, collaborating with stakeholders, developing a work breakdown structure, monitoring project progress, and leading teams. The book has short sections, numbered lists, and exercises meant to reinforce knowledge. Fundamentals of Project Management serves as a learning tool for beginner and less technically-inclined project managers.',
    bookName: 'Fundamentals of Project Management by Joseph Heagney',
    bookStatus: 'Currently Borrowed',
    dueDate: '2023-08-26',
    image: '/assets/images/pm-textbook-3.jpg'
  },
  {
    id: 1014,
    bookDesc:
      'As the title suggests, this book is one of the best project management books for MBA students. The Fast Forward MBA in Project Management provides comprehensive coverage of all aspects of the project management process. For example: adopting agile approaches or lean startup methodologies, identifying and collaborating with key stakeholders, and managing risk. A clear index means readers can quickly navigate to specific concepts, making this work a valuable resource and study guide. The book also contains a section on PMP Exam preparation, as well as dozens of downloadable forms.',
    bookName:
      'Project Management Absolute Beginner’s Guide by Gregory M. Horine',
    bookStatus: 'Currently Borrowed',
    dueDate: '2023-08-26',
    image: '/assets/images/pm-textbook-4.jpg'
  },
  {
    id: 1014,
    bookDesc:
      'As the title suggests, this book is one of the best project management books for MBA students. The Fast Forward MBA in Project Management provides comprehensive coverage of all aspects of the project management process. For example: adopting agile approaches or lean startup methodologies, identifying and collaborating with key stakeholders, and managing risk. A clear index means readers can quickly navigate to specific concepts, making this work a valuable resource and study guide. The book also contains a section on PMP Exam preparation, as well as dozens of downloadable forms.',
    bookName:
      'Project Management Absolute Beginner’s Guide by Gregory M. Horine',
    bookStatus: 'Currently Borrowed',
    dueDate: '2023-08-26',
    image: '/assets/images/pm-textbook-4.jpg'
  },
  {
    id: 1015,
    bookDesc:
      'A comprehensive guide to mastering the art of effective team management. This book sheds light on team dynamics, collaboration tools, and the methodologies required to ensure successful project delivery.',
    bookName: 'Mastering Project Teams by Dr. Jennifer L. Fraser',
    bookStatus: 'Returned',
    dueDate: '2023-07-01',
    image: '/assets/images/pm-textbook-5.jpg'
  },
  {
    id: 1016,
    bookDesc:
      'Dive deep into the nuances of risk management and learn how to proactively address potential pitfalls in your projects. A must-read for professionals who aim to bulletproof their project strategies.',
    bookName: 'Risk Management Fundamentals by Alan D. Smith',
    bookStatus: 'Returned',
    dueDate: '2023-07-02',
    image: '/assets/images/pm-textbook-6.jpg'
  },
  {
    id: 1017,
    bookDesc:
      'This resource provides a fresh perspective on project scheduling, focusing on effective time management, resource allocation, and ensuring timely project delivery.',
    bookName: 'Scheduling Mastery by Patricia G. Miller',
    bookStatus: 'Returned',
    dueDate: '2023-07-03',
    image: '/assets/images/pm-textbook-7.jpg'
  },
  {
    id: 1018,
    bookDesc:
      'Explore the world of digital project management. Understand the tools, platforms, and methodologies that are shaping the future of project management in the digital era.',
    bookName: 'Digital Project Management by Kevin J. Lansing',
    bookStatus: 'Returned',
    dueDate: '2023-07-04',
    image: '/assets/images/pm-textbook-8.jpg'
  },
  {
    id: 1019,
    bookDesc:
      'A practical guide that covers the financial aspects of project management. Learn how to budget, allocate resources, and ensure the financial success of your projects.',
    bookName: 'Financial Mastery in Project Management by Helen T. Daniels',
    bookStatus: 'Returned',
    dueDate: '2023-06-30',
    image: '/assets/images/pm-textbook-9.jpg'
  },
  {
    id: 1020,
    bookDesc:
      'Discover the power of agile methodologies in project management. This book offers a step-by-step guide on implementing agile in your projects, ensuring flexibility and adaptability.',
    bookName: 'Agile Project Management by Robert V. Griffin',
    bookStatus: 'Returned',
    dueDate: '2023-05-21',
    image: '/assets/images/pm-textbook-10.jpg'
  },
  {
    id: 1021,
    bookDesc:
      'Focused on the human side of project management, this book emphasizes the importance of leadership, communication, and interpersonal skills in successfully delivering projects.',
    bookName: 'Human-centric Project Management by Lisa M. Henderson',
    bookStatus: 'Returned',
    dueDate: '2023-05-01',
    image: '/assets/images/pm-textbook-11.jpg'
  },
  {
    id: 1022,
    bookDesc:
      'This book provides a comprehensive overview of project management tools and software, helping you choose and implement the best solutions for your needs.',
    bookName: 'Project Management Tools & Tech by Mark A. Thompson',
    bookStatus: 'Returned',
    dueDate: '2023-05-02',
    image: '/assets/images/pm-textbook-12.jpg'
  },
  {
    id: 1023,
    bookDesc:
      'Understanding stakeholder management is crucial for project success. Dive into strategies, tips, and case studies that showcase the importance of stakeholder engagement.',
    bookName: 'Stakeholder Management Excellence by Karen L. Wright',
    bookStatus: 'Returned',
    dueDate: '2023-05-03',
    image: '/assets/images/pm-textbook-13.jpg'
  }
]

export default function BorrowLimit5Alert () {
  return (
    <>
      <ModalAlert />
      {/* <ModalAlertLimit5 /> */}
      {/* <BlackListModal />
      <SuccessCheckout /> */}
      <div className='flex w-3/4 border border-gray-100 shadow-2xl space-x-3'>
        <div className='w-3/5 border border-gray-100'>
          <BookWraper
            books={books.filter(bok => bok.bookStatus != 'Returned')}
          />
        </div>
        <div className='w-2/5 flex flex-col space-y-3 '>
          <div className='shadow-lg border border-gray-100 m-1'>
            <Image
              src='/assets/images/fcuc-logo.png'
              width='150'
              height='35'
              alt='Fcuc logo'
            />
            <div className='border border-gray-100 flex justify-between space-x-1'>
              <div>
                <div>
                  <Image
                    src='/assets/images/avatar-1.jpeg'
                    width='175'
                    height='65'
                    alt='Student Photo'
                  />
                </div>
              </div>
              <div className='w-full grow-1 flex flex-col justify-start'>
                <div>
                  <p className='text-md font-extrabold'>B1998</p>
                  <p>Takeshi Kaneshiro</p>
                  <p className='underline'>Diploma in Computer Science</p>
                </div>
                <Image
                  src='/assets/images/barcode-placeholder.jpeg'
                  alt='barcode'
                  width='350'
                  height='25'
                />
              </div>
            </div>
          </div>
          <p className='font-extrabold'>Borrow History</p>
          <div className='border border-gray-100'>
            {books
              .filter(bok => bok.bookStatus == 'Returned')
              .map(bok => {
                return <ReturnedItem key={bok.id} {...bok} />
              })}
          </div>
          <Pagination total={10} initialPage={1} />
        </div>
      </div>
    </>
  )
}
