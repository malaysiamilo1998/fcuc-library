import React, { useEffect } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'

export default function RegisterOk () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  useEffect(() => {
    ;(async () => {
      onOpen()
    })()
  })
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <div
                  className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md'
                  role='alert'
                >
                  <div className='flex'>
                    <div className='py-1'>
                      <svg
                        className='fill-current h-6 w-6 text-teal-500 mr-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
                      </svg>
                    </div>
                    <div>
                      <p className='font-bold'>Student Wong Sie Ung / B936</p>
                      <p className='text-sm'>Register success</p>
                    </div>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
