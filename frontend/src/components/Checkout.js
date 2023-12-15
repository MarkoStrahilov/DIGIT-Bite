import React from 'react'
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
    IconButton,
    Flex,
    Text,
    Box
} from "@chakra-ui/react";
import CheckoutCard from './CheckoutCard';



const Checkout = ({ product, checkoutDetails, handleDelete }) => {

    console.log(product)

    return (
        <>
            <CheckoutCard data={product} handleDelete={handleDelete} checkoutDetails={checkoutDetails}/>
            ${checkoutDetails.discountedPrice.toFixed(2)} (x {product.quantity}) = ${checkoutDetails.totalForProduct.toFixed(2)}
            {product.isNew && <span> (10% off)</span>}
        </>
    )
}

export default Checkout
