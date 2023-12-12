import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { logo } from '../images/logo.png'
import fullBackground from '../images/fullBackground.png'
import { GlobalStyle } from '@chakra-ui/react'
import { GlobalStyles } from '../constants/GlobalStyles'

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