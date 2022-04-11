import { Flex, Stack, Button } from "@chakra-ui/react";


import CustomLink from "./CustomLink";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    

    return (
        <div id="navbar" className={styles.navContainer}>
            <Flex className={styles.navbar} >
            
                <Stack spacing={6} direction='row' align='center' >
                    <CustomLink link={'/works'} title={'Works'}/>
                    <CustomLink link={'/about'} title={'About'}/>
                    <CustomLink link={'/contact'} title={'Contact'}/>
                    <CustomLink link={'/test'} title={'404'}/>
                </Stack>

                
            </Flex>
        </div>
    );
}

export default Navbar;