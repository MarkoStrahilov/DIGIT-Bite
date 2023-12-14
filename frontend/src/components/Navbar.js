import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
    Skeleton,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import { GlobalStyles } from '../constants/GlobalStyles';
import firebase from 'firebase/app';
import { auth } from '../repository/firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import UserDetailss from './Auth/UserDetailss';
import Drawer from './Drawer'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [loading, setLoading] = useState()
    const navigation = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLoading(false)
                console.log('This is the user: ', user.email)
            } else {
                // No user is signed in.
                setUser(null);
                console.log('There is no logged in user');
            }
        });
    }, [])

    const handleSignOut = () => {
        auth.signOut
            .then(() => {
                setLoading(true)
                navigation.navigate()
                setLoading(false)
            })
    }

    const logoStyles = {
        width: '100px',
        height: '100px'
    };

    if (loading) {
        return (
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        )
    }

    return (
        <Box>
            <Flex
                bg={"transparent"}
                color='#FF5C00'
                fontSize={36.1}
                fontFamily={GlobalStyles.fonts.primary}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon color={'white'} w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} alignItems={'center'}>
                    <Image style={logoStyles} src={logo} boxSize='100px' />
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                {user ?
                    <UserDetailss user={user} onClickHandle={handleSignOut} />
                    :
                    <Link to={'/login'}>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            bg={GlobalStyles.colors.secondary}
                            color={'white'}
                            pl={10}
                            pr={10}
                        >
                            Sign In
                        </Button>
                    </Link>}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}



const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={12}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                to={navItem.href ?? '#'}
                                fontSize={30}
                                fontWeight={500}
                                color={'white'}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}

                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem && navItem.map((child) => {
                                        {
                                            child.showLink
                                                ?
                                                <DesktopSubNav key={child.label} {...child} />
                                                :
                                                <Text py={2}>
                                                    <Drawer />
                                                </Text>
                                        }
                                    })}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            to={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            color={'white'}
            fontSize={30}

        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: '#0F62FE' }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon color={'#0F62FE'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const [placement, setPlacement] = useState('right')

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                to={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}

            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children && children.map((child) => {
                        {
                            child.showLink
                                ?
                                <Link key={child.label} py={2} to={child.href}>
                                    {child.label}
                                </Link>
                                :
                                <Text py={2}>
                                    <Drawer />
                                </Text>
                        }
                    })}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
        showLink: true
    },
    {
        label: 'Menu',
        href: '/menu',
        showLink: true
    },
    {
        label: 'Contact',
        href: '/contact',
        showLink: true
    },
    {
        label: 'About',
        href: '/about-us',
        showLink: true
    }
];