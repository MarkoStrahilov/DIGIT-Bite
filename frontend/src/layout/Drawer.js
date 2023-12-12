import React from 'react';
import Navbar from '../components/Navbar'

import {
    Button,
    DrawerBody,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Radio,
    RadioGroup,
    Stack,
    useDisclosure
} from "@chakra-ui/react";

const Drawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <>
            <div>
                <Navbar/>
            </div>
            {/*<RadioGroup defaultValue={placement} onChange={setPlacement}>*/}
            {/*    <Stack direction='row' mb='4'>*/}
            {/*        <Radio value='top'>Top</Radio>*/}
            {/*        <Radio value='right'>Right</Radio>*/}
            {/*        <Radio value='bottom'>Bottom</Radio>*/}
            {/*        <Radio value='left'>Left</Radio>*/}
            {/*    </Stack>*/}
            {/*</RadioGroup>*/}
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Drawer;
