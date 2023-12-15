import React, { useState } from 'react';
import { auth, db } from '../../repository/firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/backgroundImage.png'
import { GlobalStyles } from '../../constants/GlobalStyles';
import Navbar from '../Navbar'
import 'react-toastify/dist/ReactToastify.css';


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

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();

    const onFormSubmit = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                db.collection('users').doc(userCredential.user.uid)
                    .set({
                        Email: email,
                        Password: password
                    }).then(() => {
                        navigate("/");
                        toast.success('Successfully registered!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }).catch((err) => {
                        // console.log(err);
                        toast.error('Error saving user data!', {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    });
            }).catch((err) => {
                // console.log(err);
                toast.error('Error creating user account!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
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
                        <Heading fontSize={'4xl'} mb={3} color={GlobalStyles.colors.secondary}>Register Now And Join The Flavor Journey!</Heading>
                        <Text fontFamily={"Montserrat"} fontSize={'lg'} color={'white'} mb={3} >
                        Register for DIGIT Bite Burger updates! Stay in the loop with our latest flavors and tech innovations. Join now and savor the future of burgers! 
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
                                onClick={onFormSubmit}>Register Today</Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <Link to={'/login'}
                            >
                                <Button
                                    color={'white'}
                                    bg={GlobalStyles.colors.secondary}
                                    w={"full"}
                                >Log In
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
