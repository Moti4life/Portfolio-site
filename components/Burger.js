import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure, Button, Input } from '@chakra-ui/react'

import { useRef } from 'react'

import styles from '../styles/Burger.module.css'
import Link from 'next/link'
import { useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SpinnerLoader from './SpinnerLoader'

const DynamicComponent = dynamic( 
    () => import('../components/SceneLoader'),
    { ssr: false , loading: () => <SpinnerLoader /> }
)


const Burger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const { toggleColorMode } = useColorMode()

    return (
        <>
            <div id='burger' className={styles.burgerContainer}>
                <Button  ref={btnRef} colorScheme='teal' onClick={() => onOpen()}>
                    Open
                </Button>
            </div>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton />
                    
                    <DrawerHeader marginTop='4rem' >Did you find what you're looking for??</DrawerHeader>

                    <DrawerBody display='flex' flexDirection='column'>
                        <Link href='/'><Button onClick={() => onClose()}>back to home</Button></Link>
                        <Link href='/test'><Button onClick={() => onClose()}>to test js</Button></Link>
                        
                        <Button onClick={toggleColorMode} size='sm'> toggle color </Button>
                        <div className={styles.modelContainer}>
                            <DynamicComponent />
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Burger;