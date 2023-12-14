import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import MenuBurger from '../images/MenuBurger.png'
import '../styles/index.css'

const CircularCategory = ({ data }) => {

    const degrees = [0, 45, 90, 135, 180, 225, 270, 315];

    return (
        <Box className='circle-container' style={{ position: 'relative', width: '80%', height: '80vh', maxHeight: "60vh" }}>
            {data &&
                data.slice(0, 8).map((elm, index) => (
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
                        <img src={elm?.strCategoryThumb} width={'200px'} height={'200px'} alt={`category-${index}`}/>
                        <p style={{ color: 'white' }}></p>
                    </div>
                ))}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <img src={MenuBurger} width={'500px'} height={'500px'} alt="center-image" />
            </div>
        </Box>
    )
}

export default CircularCategory

const styles = {
    0: {

    }
}
