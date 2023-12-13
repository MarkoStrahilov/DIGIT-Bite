import React, {useState, useEffect} from 'react'
import DIGITBiteService from '../repository/digitBiteRepository'
import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const MenuMainContent = () => {

    const categoryName = useParams()
    const [data,setData] = useState({})

    useEffect(() => {
        DIGITBiteService.fetchItemsByCategory(categoryName)
            .then((data) => {
                console.log(data)
                setData(data.data.meals)
            })
    })

    console.log(data)

    return (
        <Box border={'1px solid black'} w={"50%"}>
            <Text>{categoryName?.categoryName}</Text>
        </Box>
    )
}

export default MenuMainContent