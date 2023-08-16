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

export default function RegisterExist () {
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
                <div role='alert'>
                  <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>
                    Student already registerd
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
