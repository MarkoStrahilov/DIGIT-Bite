import React from 'react'
import { Box } from '@chakra-ui/react'
import Card from './Card'

const Category = ({ data }) => {

  console.log(data)

  return (
    <Box display={"flex"} flexWrap={"wrap"} justify={{ base: 'center', md: 'center' }} justifyContent={'space-evenly'}>
      {data && data?.map(elm => {
        return <Card data={elm}/>
      })}
    </Box>
  )


}

export default Category