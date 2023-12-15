import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { Flex } from "@chakra-ui/react";
import { Box, Text } from '@chakra-ui/react'
import { auth, db, storage } from '../repository/firebase/firebase';
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Checkout from './Checkout';
import {
    Button,
    DrawerBody,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Radio,
    RadioGroup,
    Stack,
    useDisclosure,
    IconButton
} from "@chakra-ui/react";
import { GlobalStyles } from '../constants/GlobalStyles';
import firebase from "firebase";


const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')


    const [userUid, setUserUid] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
                // console.log('This is the user in drawer: ', user.uid);

                // Ensure the user is authenticated before fetching cart items
                fetchCartProducts(user.uid);
            } else {
                // No user is signed in.
                setUserUid(null);
                // console.log('There is no logged in user');
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const fetchCartProducts = (uid) => {
        db.collection('Cart ' + uid).onSnapshot((snapshot) => {
            const newCartProduct = snapshot.docs.map((doc) => ({
                mealId: doc.id,
                ...doc.data(),
            }));
            // console.log('snapshot', snapshot.docs);
            setCartProducts(newCartProduct);
            // console.log('new cart product', newCartProduct);
        });
    };

    const handleDeleteProduct = (mealId) => {
        console.log("deleting...")
        const cartProductRef = db.collection('Cart ' + userUid).doc(mealId);

        cartProductRef.delete()
            .then(() => {
                console.log('Product deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    }

    const calculateTotalPrice = () => {
        const total = cartProducts.reduce((acc, product) => {
            const basePrice = product.formattedPrice * product.quantity;
            const discountedPrice = product.isNew ? basePrice * 0.9 : basePrice;
            return acc + discountedPrice;
        }, 0);

        return total;
    };

    const handleOrder = () => [
        setCartProducts([])
        
    ]


    return (
        <>
            <IconButton
                isRound={true}
                variant='solid'
                bg={GlobalStyles.colors.secondary}
                color={'white'}
                aria-label='Done'
                fontSize='30px'
                onClick={onOpen}
                p={25}
                mt={"25px"}
                ml={10}
                icon={<FaShoppingCart />}
            />
            <Drawer placement={placement} size={'xl'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <FaShoppingCart size={30} color={GlobalStyles.colors.secondary} />
                        <Text ml={3} fontFamily={GlobalStyles.fonts.secondary} fontSize={25}>Checkout</Text>
                    </DrawerHeader>
                    <DrawerBody>
                        {cartProducts.length === 0 ? (
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                <MdRemoveShoppingCart size={100} color={GlobalStyles.colors.secondary} />
                                <Text fontFamily={GlobalStyles.fonts.secondary} textAlign='center' fontSize='1.5em'>
                                    Your shopping cart is empty.
                                </Text>
                            </Box>
                        ) : (
                            <>
                                {cartProducts.map((product) => {
                                    const basePrice = product.formattedPrice;
                                    const discountedPrice = product.isNew ? basePrice * 0.9 : basePrice;
                                    const totalForProduct = discountedPrice * product.quantity;

                                    const info = { basePrice, discountedPrice, totalForProduct }

                                    return (
                                        <>
                                            <Checkout product={product} checkoutDetails={info} handleDelete={handleDeleteProduct}/>
                                        </>
                                    );
                                })}
                                <Flex alignItems='center' justify='flex-end' marginTop='2'>
                                    <Text fontFamily={GlobalStyles.fonts.secondary} fontSize='1.2em'>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
                                    <Button ml={3} onClick={handleOrder}>Order Now</Button>
                                </Flex>
                            </>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer;
