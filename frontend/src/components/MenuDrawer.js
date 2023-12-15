import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from "firebase";
import {auth, db, storage} from '../repository/firebase/firebase';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import Card from './Card'
import DIGITBiteService from '../repository/digitBiteRepository'

const MenuDrawer = ({ menu, handleOnClose, handleOnOpen }) => {

    const [userUid, setUserUid] = useState(null);
    const navigate = useNavigate();
    const [singleMeal, setSingleMeal] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await DIGITBiteService?.fetchItemsByCategory(menu);
                const fetchedData = result?.data?.meals;
                const limitedData = fetchedData.slice(0, 12);
                setSingleMeal(limitedData);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
                console.log('This is the user: ', user.uid)
            } else {
                // No user is signed in.
                setUserUid(null);
                console.log('There is no logged in user');
            }
        });

        fetchData()

    }, [menu])

    
    let Product;
    const addToCart = async (product, quantity) => {
        if (userUid !== null) {
            try {
                // Check if the product is already in the cart
                const cartProductDoc = db.collection('Cart ' + userUid).doc(product.mealId);
                const cartProductSnapshot = await cartProductDoc.get();

                if (cartProductSnapshot.exists) {
                    // Product exists in the cart, update the quantity
                    const existingProductData = cartProductSnapshot.data();
                    const updatedQuantity = existingProductData.quantity + quantity;
                    await cartProductDoc.update({
                        quantity: updatedQuantity,
                        TotalProductPrice: updatedQuantity * product.formattedPrice,
                    });

                    console.log(`Quantity updated for product id: ${product.mealId}`);
                } else {
                    // Product doesn't exist in the cart, add a new entry
                    Product = product;
                    Product['quantity'] = quantity || 1;
                    Product['TotalProductPrice'] = Product.quantity * Product.formattedPrice;
                    await db.collection('Cart ' + userUid).doc(product.mealId).set(Product);

                    console.log(`Added to cart, product id: ${product.mealId}`);
                }
            } catch (error) {
                console.error('Error updating/adding to cart:', error);
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <Drawer size={'xl'} placement={"right"} onClose={handleOnClose} isOpen={handleOnOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Looking at the {menu} menu</DrawerHeader>
                    <DrawerBody  display={"flex"} flexWrap={"wrap"} justify={{ base: 'center', md: 'center' }} justifyContent={'space-evenly'}>
                        {singleMeal && singleMeal.map(item => (
                            <Card data={item} size={"250px"} addToCart={addToCart}/>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MenuDrawer