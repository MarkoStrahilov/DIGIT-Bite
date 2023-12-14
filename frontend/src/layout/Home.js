import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { logo } from '../images/logo.png'
import fullBackground from '../images/fullBackground.png'
import { GlobalStyle } from '@chakra-ui/react'
import { GlobalStyles } from '../constants/GlobalStyles'
import {useState, useEffect} from 'react';
import { auth, db } from '../repository/firebase/firebase';
import firebase from 'firebase/app';
const Home = () => {

    const [user, setUser] = useState(null);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user);
            console.log('This is the user: ', user.uid)
        } else {
            // No user is signed in.
            setUser(null);
            console.log('There is no logged in user');
        }
    });

    // console.log("final user", {user});


    // function GetCurrentUser() {
    //     const [user, setUser] = useState(null);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const currentUser = await new Promise((resolve, reject) => {
    //                     const unsubscribe = auth.onAuthStateChanged((user) => {
    //                         if (user) {
    //                             resolve(user);
    //                         } else {
    //                             resolve(null);
    //                         }
    //                         // Cleanup the subscription when the component unmounts
    //                         return () => unsubscribe();
    //                     });
    //                 });
    //
    //                 if (currentUser) {
    //                     // User is signed in.
    //                     setUser(currentUser);
    //                     // You can perform additional actions with the user object if needed.
    //                     // For example, fetch additional user data from Firestore.
    //                     const userRef = db.collection('users').doc(currentUser.uid);
    //                     console.log("userRef",userRef.firestore.df)
    //                     const doc = await userRef.get();
    //                     if (doc.exists) {
    //                         console.log('Document data:', doc.data());
    //                     } else {
    //                         console.log('No such document!');
    //                     }
    //                 } else {
    //                     // No user is signed in.
    //                     setUser(null);
    //                 }
    //             } catch (error) {
    //                 console.error('Error fetching user:', error);
    //             }
    //         };
    //
    //         fetchData();
    //     }, []);
    //
    //     return user?.email || null;
    // }

    // const user = GetCurrentUser();
    // console.log("final user ",user);


    return (
        <Box
            minHeight={'100vh'}
            bgImage={fullBackground}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >
            <Navbar user={user}/>
            <Box ml={40} mt={35}>
                <Box>
                    <Flex flexDir={'column'}>
                        <Box
                            color="white"
                            fontSize={80}
                            fontFamily={'Raleway'}
                        > DIGIT BITE
                        </Box>
                        <Box
                            fontSize={120}
                            fontFamily={'Raleway'}
                            color={GlobalStyles.colors.secondary}
                        >
                            BURGER
                        </Box>

                    </Flex>
                    <Text w={500} color={'#ffff'} lineHeight={8}>Digit Bite Burger: Elevate Your Culinary Experience with Lightning-Fast Fast Food Indulgences – Unveiling an Array of Quick Bites for On-the-Go Gratification and Instant Flavorful Bliss!"</Text>
                </Box>
                <Button color={'white'} mt={8} pl={10} pr={10} pb={5} pt={5} bg={GlobalStyles.colors.secondary}>TRY IT</Button>
            </Box>
        </Box >
    )
}

export default Home