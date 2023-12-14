import React from 'react'
import { Flex, Menu, MenuList, Avatar, Text, MenuDivider, MenuItem, MenuButton, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const UserDetailss = ({ user, onClickHandle }) => {
    return (
        <Flex alignItems={'center'}>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    {/* <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    /> */}
                    <Text
                    color={"white"}
                    >
                        Hello There {user.email}
                    </Text>
                </MenuButton>
                <MenuList>
                    <Link to={'/settings'}>
                        <MenuItem
                            fontFamily={'sans-serif'}
                            fontSize={20}
                            color={'black'}
                        >Settings</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem
                        fontFamily={'sans-serif'}
                        fontSize={20}
                        color={'black'}
                    >Contact Support
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                        fontFamily={'sans-serif'}
                        fontSize={20}
                        color={'black'}
                        textAlign={'right'}
                        onClick={onClickHandle}>Sign Out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default UserDetailss