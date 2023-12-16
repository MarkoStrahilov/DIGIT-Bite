import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { logo } from '../images/logo.png'
import fullBackground from '../images/backgroundImage.png'
import { GlobalStyle } from '@chakra-ui/react'
import { GlobalStyles } from '../constants/GlobalStyles'
import {useState, useEffect} from 'react';
import { auth, db } from '../repository/firebase/firebase';
import firebase from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import burger from '../images/burger.png'
import Drawer from "../components/Drawer";
import {Link} from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                console.log('This is the user:', authUser.uid);
            } else {
                setUser(null);
                console.log('There is no logged-in user');
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleTryItClick = () => {
        // Navigate to the '/menu' route
        navigate('/menu');
    };

    return (
        <Box
            minHeight={'100vh'}
            bgImage={fullBackground}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >
            <Navbar />
            <Box ml={[2, 4, 300]} mt={[10, 15, 110]} display={'flex'} flexDirection={['column', 'column', 'row-reverse']} alignItems={'center'}>
                <Box>
                    <Flex flexDirection={['column', 'column', 'column']}>
                        <Box color="white" fontSize={[50, 70, 80, 100]} fontFamily={'Norwester'} mb={[-6, -8, -10]}>
                            DIGIT BITE
                        </Box>
                        <Box
                            fontSize={[100, 140, 160, 180]}
                            fontFamily={'Norwester'}
                            color={GlobalStyles.colors.secondary}
                            mt={[-4, -6, -8, -8]}
                            ml={[-1, -1, -1, -2]}
                        >
                            BURGER
                        </Box>
                    </Flex>
                    <Text
                        w={['100%', '100%', '75%']}
                        color={'whitesmoke'}
                        textAlign={'left'}
                        fontFamily={'Montserrat'}
                        mt={-3}
                        fontSize={['14px', '16px', '18px']}
                    >
                        Digit Bite Burger: Elevate Your Culinary Experience with Lightning-Fast
                        Fast Food Indulgences – Unveiling an Array of Quick Bites for On-the-Go
                        Gratification and Instant Flavorful Bliss!
                    </Text>
                    <Flex>
                        <Link to="/menu">
                            <Button
                                color={'white'}
                                mt={6}
                                pl={'48px'}
                                pr={'48px'}
                                pb={6}
                                pt={6}
                                mb={'40px'}
                                borderRadius={30}
                                bg={GlobalStyles.colors.secondary}
                                fontSize={'25px'}
                                fontFamily={'Studly'}
                                onClick={handleTryItClick}
                            >
                                TRY IT
                            </Button>
                        </Link>
                        <Drawer />
                    </Flex>
                </Box>

                <Box
                    flexShrink={0}
                    flexWrap={'wrap'}
                    mb={[0, 0, 0]}
                    mr={[0, 0, 0, '90px']}
                    maxHeight={['auto', 'auto', '60vh']}
                    width={['100%', '100%', 500, 650]}
                >
                    <img
                        src={burger}
                        alt="Burger"
                        style={{
                            flexShrink: 1,
                            transform: 'translateY(-50px)', // Default translateY value
                            '@media screen and (min-width: 768px) and (max-width: 1023px)': {
                                width: '100%', // Set width to 100% on tablets
                                transform: 'translateY(-100px)', // Adjust for tablets
                            },
                            '@media screen and (min-width: 1024px)': {
                                width: '80%', // Set width to 80% on desktop
                                transform: 'translateY(-150px)', // Adjust for desktop screens
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
