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

export default function LostDamageFineModal () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  useEffect(() => {
    ;(async () => {
      //   onOpen()
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
                  className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 m-3 rounded relative'
                  role='alert'
                >
                  <strong className='font-bold'>Pay fine </strong>
                  <span className='block sm:inline'>
                    before proceeding to loan new book
                  </span>
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
