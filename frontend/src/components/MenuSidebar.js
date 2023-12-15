import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { GlobalStyles } from '../constants/GlobalStyles'

const MenuSidebar = ({ data }) => {

    console.log(data)

    return (
        <Box
            maxH={"110vh"}
            mr={20}
            bg={"white"}
            p={5}
            borderRadius={10}
        >
            {data.map(element => (
                <Link key={element.idCategory} to={`category/${element?.strCategory}`}>
                    <Text
                        fontFamily={GlobalStyles.fonts.primary}
                        _hover={{
                            background: GlobalStyles.colors.secondary,
                            color: "white",
                            borderRadius: 10
                          }}
                        p={4}
                        mb={3}
                    >
                        {element?.strCategory}
                    </Text>
                </Link>
            ))
            }
        </Box >
    )
}

export default MenuSidebar