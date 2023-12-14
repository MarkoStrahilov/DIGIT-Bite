import { useRef } from 'react'
import { Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'

function PopModal({addToCart, mealItem}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    const handleAddToCart = () => {
        console.log("handle cart function: ", mealItem)
        addToCart(mealItem)
        onClose()
    }
  
    return (
      <>
        <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box>
  
        <Button mt={4} onClick={onOpen}>
          Add To Card
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Hello There
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={handleAddToCart}>Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default PopModal; 