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
        <Box display={"flex"} flexWrap={"wrap"} justify={{ base: 'center', md: 'center' }} justifyContent={'space-evenly'}>
            {data && data?.map(elm => {
                return <Card data={elm} addToCart={addToCart}/>
            })}
        </Box>
    )



}

export default Category