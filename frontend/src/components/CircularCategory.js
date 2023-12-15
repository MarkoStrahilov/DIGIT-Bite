import React, { useRef, useState } from 'react'
import { Text, Box, useDisclosure } from '@chakra-ui/react'
import MenuBurger from '../images/MenuBurger.png'
import MenuDrawer from './MenuDrawer'
import '../styles/index.css'
import { GlobalStyles } from '../constants/GlobalStyles'

const CircularCategory = ({ data }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [category, setCategory] = useState("")

    const degrees = [0, 45, 90, 135, 180, 225, 270, 315];

    const handleDrawerOpen = (value) => {
        setCategory(value)
        onOpen()
    }

    return (
        <Box className='circle-container' style={{ position: 'relative', width: '80%', height: '65vh' }}>
            {data &&
                data.slice(0, 8).map((elm, index) => (
                    <>
                        <div
                            key={index}
                            className={`deg${degrees[index]}`}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) rotate(${degrees[index]}deg) translate(340px) rotate(-${degrees[index]}deg)`,
                            }}
                        >
                            <Box ref={btnRef}
                                _hover={{
                                    cursor: "pointer"
                                }}
                                onClick={() => handleDrawerOpen(elm?.strCategory)}>
                                <img src={elm?.strCategoryThumb} width={'150px'} height={'150px'} alt={`category-${index}`} />
                                <Text
                                    style={{
                                        transform: "translate(-40px, 60px)",
                                        overflow: "visible",
                                        whiteSpace: "nowrap",
                                        fontSize: 30,
                                        fontFamily: GlobalStyles.fonts.secondary
                                    }}
                                    color="white"
                                >{elm?.strCategory}</Text>
                            </Box>
                        </div >
                    </>
                ))
            }
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <img src={MenuBurger} width={'400px'} height={'400px'} alt="center-image" />
            </div>
            <MenuDrawer menu={category} handleOnClose={onClose} handleOnOpen={isOpen} />
        </Box >
    )
}

export default CircularCategory

const styles = {
    0: {

    }
}
