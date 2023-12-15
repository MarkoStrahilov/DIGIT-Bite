import { useRef, useState } from 'react';
import {
    Button,
    Box,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Flex,
    Text,
} from '@chakra-ui/react';

function PopModal({ addToCart, mealItem }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const productWithQuantity = { ...mealItem, quantity };
        addToCart(productWithQuantity);
        onClose();
    };

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
            <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
                Some other content that'll receive focus on close.
            </Box>

            <Button mt={4} onClick={onOpen}>
                Add To Cart
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Hello There</Text>

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
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={handleAddToCart}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PopModal;
