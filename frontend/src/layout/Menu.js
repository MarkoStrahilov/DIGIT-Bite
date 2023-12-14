import React, { useEffect, useState } from 'react'
import DIGITBiteService from "../repository/digitBiteRepository";
import Navbar from '../components/Navbar'
import MenuMainContent from '../components/MenuMainContent';
import MenuSidebar from '../components/MenuSidebar';
import { Box, Flex } from '@chakra-ui/react';
import fullBackground from '../images/backgroundImage.png'

const Menu = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    DIGITBiteService.fetchCategories()
      .then((data) => {
        setCategories(data.data.categories)
      })
  }, [])

  return (
    <Box             
    minHeight={'100vh'}
    bgImage={fullBackground}
    bgPosition={'center'}
    bgRepeat={'no-repeat'}
    bgSize={'cover'}>
      <Navbar />
      <Flex maxW='80%'
        border={'1px solid black'}
        m={"auto"}
        p={10}
      >
        <MenuSidebar data={categories} />
        <MenuMainContent />
      </Flex>
    </Box>

  )
}

export default Menu