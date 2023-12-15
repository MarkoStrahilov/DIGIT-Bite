import React, {useEffect, useState} from 'react'
import {Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import fullBackground from '../images/backgroundImage.png'
import { GlobalStyles } from '../constants/GlobalStyles'
import {Link} from "react-router-dom";
import {useNavigate } from "react-router-dom"
const PageNotFound = () => {
    return (
        <Box
            minHeight={'100vh'}
            bgImage={fullBackground}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >
            <Box display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"} fontFamily={"norwester"} height={"100vh"}>
                <Text  textAlign={"center"} fontSize={"160px"} color={GlobalStyles.colors.secondary}>404</Text>
                <Text fontSize={"30px"} color={"white"} textAlign={"center"} w>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</Text>
                <Box>
                    <Link to={"/"}>
                    <Button mr={["60px"]} color={'white'} mt={6} pl={["30px","40px","48px"]} pr={["30px","40px","48px"]} pb={6} pt={6} mb={"40px"} borderRadius={30} bg={GlobalStyles.colors.secondary} fontSize={'25px'} fontFamily={"Studly"}>
                    GO HOME
                    </Button>
                    </Link>
                    <Link to={"/contact"}>
                    <Button color={'white'} mt={6} pl={["30px","40px","48px"]} pr={["30px","40px","48px"]} pb={6} pt={6} mb={"40px"} borderRadius={30} bg={GlobalStyles.colors.secondary} fontSize={'25px'} fontFamily={"Studly"}>
                    CONTACT
                    </Button>
                </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default PageNotFound