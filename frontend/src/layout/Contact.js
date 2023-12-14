import React from 'react'
import {Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import Card from '../components/Card'
import { logo } from '../images/logo.png'
import fullBackground from '../images/backgroundImage.png'
import { GlobalStyle } from '@chakra-ui/react'
import { GlobalStyles } from '../constants/GlobalStyles'
import  location  from '../images/Icons/Location.png'
import  mail  from '../images/Icons/Mail.png'
import  phone  from '../images/Icons/Phone.png'
import  web  from '../images/Icons/Web.png'
import  burger  from '../images/contactBurger.png'
import Navbar from "../components/Navbar";


const Contact = () => {
  return (

          <Box
               minHeight={'100vh'}
               bgImage={fullBackground}
               bgPosition={'center'}
               bgRepeat={'no-repeat'}
               bgSize={'cover'}

          >
              <Navbar />
              <Box display={"flex"} flexDir={["column-reverse","column-reverse","row"]} >
                  <Box color={"white"} fontSize={["22px","30px",30]} width={["100%","100%","50%"]} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                      <Box display={"flex"} flexDir={"column"}>
                        <Text fontSize={["45px","55px","65px","110px"]} fontFamily={"Norwester"}>
                              Contact
                        </Text>
                        <Text mt={[-3,0,-10]} mb={["25px",0,10]} fontSize={["50px","50px","60px","100px"]} fontFamily={"Norwester"} color={GlobalStyles.colors.secondary}>
                             Information
                        </Text>
                          <Box display={"flex"} flexDir={"column"}>
                              <Box  display={"flex"} mb={[5,5,8]}>
                                <Image mr={10} src={phone} alt={'Phone Icon'}/>
                                <Text>123-456-789</Text>
                              </Box>
                              <Box  display={"flex"} mb={[5,5,8]}>
                                  <Image mr={10} src={mail} alt={'Mail Icon'}/>
                                  <Text>digitbite@gmail.com</Text>
                              </Box>
                              <Box  display={"flex"} mb={[5,5,8]}>
                                  <Image mr={10} src={web} alt={'Web Icon'}/>
                                  <Text>www.digitbite.com</Text>
                              </Box>
                              <Box  display={"flex"}>
                                  <Image mr={10} src={location} alt={'Location Icon'}/>
                                  <Text>991 Stanton Roads</Text>
                              </Box>

                          </Box>
                      </Box>
                  </Box>
                  <Box color={"white"} width={["100%","100%","50%"]} height={["45vh","45vh","auto"]}>
                     <Box display={"flex"} flexDir={["column-reverse","column-reverse","column"]} justifyContent={"center"} alignItems={"center"}>
                            <Image src={burger} alt={'Burger Icon'} width={["auto","auto","650px"]}></Image>
                            <Text mb={["-60px","-120px","30px"]} mt={["auto","auto","-110px"]} fontFamily={"Studly"} color={GlobalStyles.colors.primary} fontSize={["40px","45px","65px","70px"]} >DIGIT BITE</Text>

                     </Box>
                  </Box>
              </Box>


          </Box>

  )
}

export default Contact