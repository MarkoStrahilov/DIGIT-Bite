import React, {useEffect, useState} from 'react'
import {Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import Card from '../components/Card'
import { logo } from '../images/logo.png'
import fullBackground from '../images/backgroundImage.png'
import { GlobalStyle } from '@chakra-ui/react'
import { GlobalStyles } from '../constants/GlobalStyles'
// import 'firebase/database'
import firebaseConfig from '../repository/firebase/firebase'
import firebase from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import SideDrawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import chef from '../images/chef.png'
import burger from "../images/contactBurger.png";



const About = (item) => {

    const navigate = useNavigate();


    function GetUserUid() {
        const [uid, setUid] = useState(null);

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUid(user.uid);
                console.log('This is the user: ', user)
            } else {
                // No user is signed in.
                setUid(null);
                console.log('There is no logged in user');
            }
        });

        return uid;
    }

    const userUid = GetUserUid();

    const AddToCart = (product) => {
        if(userUid !== null) {
            console.log("we have logged in user and product");
        } else {
            navigate("/login");
        }
    }

    // const [cart, setCart] = useState([]);
    //
    //
    // useEffect(() => {
    //     if(!firebase.apps.length) {
    //         firebase.initializeApp(firebaseConfig)
    //     }
    // }, [firebaseConfig])
    //
    // const addToCart = (product) => {
    //     setCart([..cart, product]);
    //
    //     const dbRef = firebase.database().ref
    // }



    return (
            // <SideDrawer/>
            // <button onClick={() => addToCart(data)}></button>
        //...

        <Box
            minHeight={'100vh'}
            bgImage={fullBackground}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >
            <Navbar />
            <Flex
                flexDir={["column-reverse","column-reverse","row"]}
                maxH={'90vh'}
            >
                <Box
                    
                    width={['100%', '100%', '50%']}
                    height={['45vh', '45vh', 'auto']}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Image
                        src={chef}
                        alt={'Chef'}
                        objectFit={"contain"}
                        height={['auto', 'auto', '100%']}
                        maxHeight={["45vh","45vh","100vh"]}


                    />
                </Box>
                <Box width={['100%', '100%', '50%']} height={['45vh', '45vh', 'auto']}>
                    <Box display={'flex'} flexDir={'column'} justifyContent={'center'} p={[4, 6, 8]}>
                        <Text fontSize={["55px","55px","65px","110px"]} fontFamily={'Norwester'} color={'white'}>
                            Our
                        </Text>
                        <Text mt={[-3, 0, -5]} mb={[2, 0, 2]} fontSize={["60px","50px","60px","100px"]} fontFamily={'Norwester'} color={GlobalStyles.colors.secondary}>
                            Story
                        </Text>
                        <Text color={'white'} fontSize={['14.5px', '16px', '18px', '22px']} mb={4} fontFamily={"Montserrat"}>
                            Digit Bite: Where every tap bites into a world of flavors! Explore diverse dishes in our wide range menu. Whether you’re craving comfort or culinary adventures, Digit Bite ensures that great food is just a tap away – making your dining journey convenient, enjoyable, and delicious.
                        </Text>
                        <Button color={'white'} width={["200px"]} mt={6} pl={"48px"} pr={"48px"} pb={6} pt={6} mb={"40px"} borderRadius={30} bg={GlobalStyles.colors.secondary} fontSize={'25px'} fontFamily={"Studly"}>
                            OUR MENU
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </Box>

    )
}

export default About