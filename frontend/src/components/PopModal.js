import { useRef, useState } from 'react'
import { Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Flex } from '@chakra-ui/react'
import { FaCartPlus } from "react-icons/fa";
import { GlobalStyles } from '../constants/GlobalStyles';

function PopModal({ addToCart, mealItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    console.log("handle cart function: ", mealItem)
    addToCart(mealItem)
    onClose()
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Add To Card
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={2}>Add your <b>{mealItem?.title}</b> to the cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <FaCartPlus size={100} color={GlobalStyles.colors.secondary} />
            <Text mt={7}>
              Thank you for choosing DIGIT Bite Burger! We're excited to process your order. To ensure accuracy and finalize your purchase, we kindly ask you to click the 'Confirm' button below. Your satisfaction is our priority, and we appreciate your trust in us.
            </Text>
            <Flex alignItems='center' justify='space-between' mt={4}>
              <Text>Quantity:</Text>
              <Flex>
                <Button size='sm' onClick={handleDecreaseQuantity}>
                  -
                </Button>
                <Text mx={2}>{quantity}</Text>
                <Button size='sm' onClick={handleIncreaseQuantity}>
                  +
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={"white"}
              color={GlobalStyles.colors.secondary}
              border={`1px solid ${GlobalStyles.colors.secondary}`}
              mr={3}
              onClick={handleAddToCart}
            >Confirm
            </Button>
            <Button
              bg={GlobalStyles.colors.secondary}
              color={"white"}
              onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PopModal; 