import React, {useEffect, useState} from 'react'
import { Box } from '@chakra-ui/react'
import Card from './Card'
import firebase from "firebase";
import {useNavigate} from 'react-router-dom'
import {auth, db, storage} from '../repository/firebase/firebase';

const Category = ({ data }) => {

  console.log(data)

    const [userUid, setUserUid] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
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
    }, [])

    let Product;
    const addToCart = (product) => {
        if (userUid !== null) {
            console.log("product in category and not null", product);
            Product = product;
            Product['quantity'] = product.quantity || 1; // Default to 1 if quantity is not provided
            Product['totalProductPrice'] = Product.quantity * Product.formattedPrice;

            const cartProductRef = db.collection('Cart ' + userUid).doc(product.mealId);

            cartProductRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        // Update existing cart item
                        cartProductRef.update({
                            quantity: firebase.firestore.FieldValue.increment(Product.quantity),
                            totalProductPrice: firebase.firestore.FieldValue.increment(Product.totalProductPrice),
                        }).then(() => {
                            console.log(`Updated cart item with ID: ${product.mealId}`);
                        }).catch((error) => {
                            console.error('Error updating cart item:', error);
                        });
                    } else {
                        // Add new cart item
                        cartProductRef.set(Product)
                            .then(() => {
                                console.log(`Added to cart baby! Product ID: ${product.mealId}`);
                            })
                            .catch((err) => {
                                console.error('Error adding to cart:', err);
                            });
                    }
                })
                .catch((error) => {
                    console.error('Error checking if cart item exists:', error);
                });
        } else {
            navigate("/login");
        }
    };

    return (
        <Box display={"flex"} flexWrap={"wrap"} justify={{ base: 'center', md: 'center' }} justifyContent={'space-evenly'}>
            {data && data?.map(elm => {
                return <Card data={elm} addToCart={addToCart} />
            })}
        </Box>
    );



    return (
        <Box display={"flex"} flexWrap={"wrap"} justify={{ base: 'center', md: 'center' }} justifyContent={'space-evenly'}>
            {data && data?.map(elm => {
                return <Card data={elm} addToCart={addToCart}/>
            })}
        </Box>
    )



}

export default Category