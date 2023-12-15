import React, { useState } from 'react'
import { auth } from '../../repository/firebase/firebase';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import backgroundImage from '../../images/backgroundImage.png'
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from '../../constants/GlobalStyles';
import Navbar from '../Navbar'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    Container,
    Divider,
    HStack,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

const SignIn = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const onFormSubmit = () => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            toast.success('Successfully Logged In!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate("/");
        }).catch((err) => {
            console.log(err);
            toast.error('Incorrect email or password', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }

    return (
        <Box
            minHeight={'100vh'}
            bgImage={backgroundImage}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}

        >
            <Navbar />
            <Container
                maxW="xl"
                py={{
                    base: '12',
                    md: '18',
                }}
                px={{
                    base: '0',
                    sm: '8',
                }}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={3}>
                    <Stack align={'center'}>
                        <Heading mb={3} fontSize={'4xl'} color={GlobalStyles.colors.secondary}>Log In to Flavorful Experiences!</Heading>
                        <Text fontFamily={GlobalStyles.fonts.secondary} fontSize={'lg'} color={'white'} mb={3}>
                            Unlock exclusive bites and tech delights! Your journey begins with a click. Log in now!
                        </Text>
                    </Stack>
                </Stack>
                <Box
                    boxShadow='dark-lg'
                    bg='white'
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input
                                    type={"email"}
                                    placeholder={"Enter your email"}
                                    value={email}
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder={"Enter your password"}
                                    value={password}
                                    required={true}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox >Remember me</Checkbox>
                        </HStack>
                        <Stack spacing="6">
                            <Button
                                color={GlobalStyles.colors.secondary}
                                border={`1px solid ${GlobalStyles.colors.secondary}`}
                                onClick={onFormSubmit}>Sign in</Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <Link to={'/register'}
                            >
                                <Button
                                    color={'white'}
                                    bg={GlobalStyles.colors.secondary}
                                    w={"full"}
                                >Registration
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );

}

export default SignIn;
