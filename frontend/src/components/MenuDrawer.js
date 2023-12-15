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
    const addToCart = (product) => {
        if(userUid !== null) {
            console.log("product in category and not null", product);
            Product = product;
            Product['quantity'] = 1;
            Product['TotalProductPrice'] = Product.quantity*Product.formattedPrice;
            db.collection('Cart ' + userUid).doc(product.mealId).set(Product)
                .then(() => {
                    console.log(`added to cart baby !n and the product id is: ${product.mealId} `)
                }).catch((err) => {
                console.log(err);
            });
        } else {
            navigate("/login");
        }
    }

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