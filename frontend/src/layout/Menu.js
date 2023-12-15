import React, { useEffect, useState } from 'react'
import DIGITBiteService from "../repository/digitBiteRepository";
import Navbar from '../components/Navbar'
import MenuMainContent from '../components/MenuMainContent';
import MenuSidebar from '../components/MenuSidebar';
import { Box, Flex } from '@chakra-ui/react';
import fullBackground from '../images/backgroundImage.png'
import CircularCategory from '../components/CircularCategory';

const Menu = () => {

  const [categories, setCategories] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    DIGITBiteService.fetchCategories()
      .then((data) => {
        setCategories(data.data.categories)
      })
    window.screen.width <= 834 ? setIsMobile(true) : setIsMobile(false);
  }, [])

  function detectWindowSize() {
    window.innerWidth <= 834 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  console.log(isMobile)

  return (
    <Box
      minHeight={'100vh'}
      bgImage={fullBackground}
      bgPosition={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}>
      <Navbar />
      {isMobile ?
        <Flex
          m={10}
        >
          <MenuSidebar data={categories} />
          <MenuMainContent />
        </Flex>
        :
        <CircularCategory data={categories} />
      }
    </Box >

  )
}

export default Menu