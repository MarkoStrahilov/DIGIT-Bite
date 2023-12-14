import React, {useEffect, useState} from 'react';
import Navbar from './Navbar'

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
import { FaShoppingCart } from "react-icons/fa";
import { GlobalStyles } from '../constants/GlobalStyles';
import firebase from "firebase";
import {db} from "../repository/firebase/firebase";


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
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        {cartProducts.map(product => {
                            return (
                                <ul>
                                    <li>
                                        {product.title}
                                    </li>
                                </ul>
                            );
                        })}
                        {/*<p>Some contents...</p>*/}
                        {/*<p>Some contents...</p>*/}
                        {/*<p>Some contents...</p>*/}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer;
