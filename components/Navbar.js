import { Flex, Stack, Button } from "@chakra-ui/react";
// import Link from "next/link";
// import { Link } from "@chakra-ui/react";

import CustomLink from "./CustomLink";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    

    return (
        <div id="navbar" className={styles.navContainer}>
            <Flex className={styles.navbar} >
            
                {/* <Link href='/'>
                    <Heading fontWeight='400' size='lg'>Moti's</Heading>
                </Link>
                */}
                <Stack spacing={6} direction='row' align='center' >
                        <CustomLink link={'/'} title={'About'}/>
                        <CustomLink link={'/works'} title={'Works'}/>
                        <CustomLink link={'/contact'} title={'Contact'}/>
                </Stack>

                
            </Flex>
        </div>
    );
}

export default Navbar;