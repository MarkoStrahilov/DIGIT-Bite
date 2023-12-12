import { Box, Image, Badge ,CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import '../Fonts/fonts.css'
function Card() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Digit Burger',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge
                        borderRadius='full'
                        px='2'
                        color='white'
                        backgroundColor='#ED2939'>

                        New
                    </Badge>
                    <Box
                        color='gray'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {property.beds} Serving size &bull; {property.baths} Ingredients
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontFamily='Studly'
                    color='black'
                    fontSize='26px'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    letterSpacing='0.3px'
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>

                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <FaStar
                                key={i}
                                color={i < property.rating ? '#FFDF00' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='#ED2939' fontSize='sm' fontWeight='bold'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Card;