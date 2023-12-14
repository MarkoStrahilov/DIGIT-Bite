import React, { useState, useEffect } from 'react'
import DIGITBiteService from '../repository/digitBiteRepository'
import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Category from './Category'
import Loading from './Loading'

const MenuMainContent = () => {

    const [loading, setLoading] = useState(true)
    const categoryName = useParams()
    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await DIGITBiteService?.fetchItemsByCategory(categoryName?.categoryName);
                const fetchedData = result?.data?.meals;
                const limitedData = fetchedData.slice(0, 12);
                setData(limitedData);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()

    }, [categoryName?.categoryName])

    if (data?.length === 0) {
        return <Text>Hello There Please select your menu</Text>
    } else if (loading) {
        return <Loading />
    } else {
        return (
            <Box border={'1px solid black'}>
                {data ? <Category data={data} /> : null}
            </Box>
        )
    }


}

export default MenuMainContent