import { useRef } from 'react'
import { Button, Box, Image, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import { GlobalStyles } from '../constants/GlobalStyles'
import '../Fonts/fonts.css'
import PopModal from './PopModal'

function Card({ data, addToCart, size }) {

    const getRandomNumberFunc = (max, min) => {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return rand
    }

    const mealItem = {
        mealId: data?.idMeal,
        imageUrl: data?.strMealThumb,
        imageAlt: 'Meal Item',
        beds: getRandomNumberFunc(2, 6),
        baths: getRandomNumberFunc(2, 10),
        title: data?.strMeal,
        formattedPrice: getRandomNumberFunc(130, 0),
        reviewCount: getRandomNumberFunc(15, 1),
        rating: getRandomNumberFunc(5, 1),
        isNew: getRandomNumberFunc(15, 1) % 2 === 0 ? true : false
    }

    return (
        <Box maxW={size ? size : '300px'}
            borderWidth='2px'
            borderRadius='lg'
            overflow='hidden'
            m={1}
            bg={"white"}
        >
            <Image src={mealItem.imageUrl} alt={mealItem.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    {mealItem.isNew ?
                        <Badge
                            borderRadius='full'
                            px='2'
                            color='white'
                            backgroundColor={GlobalStyles.colors.secondary}
                            textAlign={'center'}
                            fontSize={'10px'}
                            mr={2}
                        >
                            New
                        </Badge> : null
                    }
                    <Box
                        color='gray'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                    >
                        {mealItem.beds} Serving sizes &bull; {mealItem.baths} Ingredients
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontFamily='Studly'
                    color='black'
                    fontSize='15px'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    letterSpacing='0.3px'
                    font
                >
                    {mealItem.title}
                </Box>

                <Box>
                    ${mealItem.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>

                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <FaStar
                                key={i}
                                color={i < mealItem.rating ? '#FFDF00' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='#ED2939' fontSize='sm' fontWeight='bold'>
                        {mealItem.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
            
            <PopModal mealItem={mealItem} addToCart={addToCart}/>
        </Box> 
    )
}

export default Card;