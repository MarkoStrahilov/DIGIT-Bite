import React from 'react'
import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'

const Home = () => {
    return (
        <Box backgroundColor={"#000"} minHeight={'100vh'}>
            <Navbar />
            <div>Home</div>
        </Box>
    )
}

export default Home