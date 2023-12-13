import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { GlobalStyles } from '../constants/GlobalStyles';
import fullBackground from '../images/backgroundImage.png';
import burger from '../images/burger.png'

const Home = () => {
    return (
        <Box
            minHeight={'100vh'}
            bgImage={fullBackground}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >
            <Navbar />
            <Box ml={[2, 4, 190]} mt={[10, 15, 160]} display={"flex"} flexDirection={["column", "column", "row-reverse"]}>
                <Box>
                    <Flex flexDirection={['column', 'column', 'column']}>
                        <Box
                            color="white"
                            fontSize={[50, 70, 80, 100]}
                            fontFamily={'Norwester'}
                            mb={[-6, -8, -10]}
                        >
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
                        Gratification and Instant Flavorful Bliss!"
                    </Text>
                    <Button color={'white'} mt={6} pl={"48px"} pr={"48px"} pb={6} pt={6} mb={"40px"} borderRadius={30} bg={GlobalStyles.colors.secondary} fontSize={'25px'} fontFamily={"Studly"}>
                        TRY IT
                    </Button>
                </Box>

                <Box flexShrink={0} mb={[0, 0, 0]}>
                    <img
                        src={burger}
                        alt="Burger"
                        maxWidth={[100, 100, 100, 500]} // Adjust based on your design
                        width="79%"
                        maxHeight={["auto","auto","30vh"]}
                        style={{
                            transform: 'translateY(-50px)', // Default translateY value
                            '@media screen and (min-width: 768px)': {
                                transform: 'translateY(-100px)', // Adjust for larger screens
                            },
                            '@media screen and (min-width: 1024px)': {
                                transform: 'translateY(-150px)', // Adjust for even larger screens
                            },
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
};

export default Home;