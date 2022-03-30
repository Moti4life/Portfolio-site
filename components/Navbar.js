import { Heading, Flex, Stack, Button, Switch , useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
// import { Link } from "@chakra-ui/react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    const { toggleColorMode } = useColorMode()
    // const navbarBackground = useColorModeValue("jade.50", "gray.800")
    const colorModeBackground = useColorModeValue("purple", "orange")

    return (
        <div className={styles.navContainer}>
            <Flex className={styles.navbar} >
            
                <Link href='/'>
                    <Heading fontWeight='400' size='lg'>Moti's</Heading>
                </Link>

                <Stack spacing={5} direction='row' align='center' >
                        <Link href='/' >Home</Link>
                        <Link href='/works' >Works</Link>
                    
                    
                    <Button onClick={toggleColorMode} colorScheme={colorModeBackground} size='md'>
                        <FontAwesomeIcon icon={faCircleHalfStroke} size="lg"/>
                    </Button>
                </Stack>
            </Flex>
        </div>
    );
}

export default Navbar;