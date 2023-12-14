import React, { useState } from 'react';
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


const SideDrawer = ({data}) => {
    console.log(data)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

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
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer;
