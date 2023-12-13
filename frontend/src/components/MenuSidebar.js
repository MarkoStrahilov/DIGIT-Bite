import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const MenuSidebar = ({ data }) => {

    return (
        <Box border={'1px solid black'} w={"50%"}>
            {data.map(element => (
                <Link key={element.idCategory} to={`category/${element?.strCategory}`}>
                    <Text border={'1px solid black'} p={2} mb={3}>{element?.strCategory}</Text>
                </Link>
            ))
            }
        </Box >
    )
}

export default MenuSidebar