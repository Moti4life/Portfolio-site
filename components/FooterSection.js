import styles from '../styles/FooterSection.module.css'
/* import Link from "next/link";
import Image from "next/image"; */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

import { Text, Box, Stack, Flex, useColorModeValue } from "@chakra-ui/react";

const FooterSection = () => {

    const yearNow = new Date().getFullYear()
    

    const bgFooterColor = useColorModeValue('blackAlpha.900', '#bbff00') // 
    const fontColor = useColorModeValue('white', 'black')

    return (
        <Box className={styles.footerContainer} backgroundColor={bgFooterColor} color={fontColor} >

            <div className={styles.bottomContainer}>
                <span className={styles.worksMoti}>MOTI.M</span>

                <div className={styles.linkContainer}>
                    <div className={styles.linkOut}>
                        <a href='https://github.com/moti4life' target={"_blank"} rel="noopener noreferrer" >
                            <Stack direction={"row"} spacing={'.5rem'}>
                                <Text fontSize='lg'>
                                    GitHub
                                </Text>
                                <FontAwesomeIcon icon={faGithubSquare} size="xl"/>
                            </Stack>
                        </a>
                    </div>

                    <div className={styles.linkOut}>
                        <a href="mailto:works.moti@gmail.com" title="works.moti@gmail.com">
                
                            <Stack direction={"row"} spacing={'.5rem'}>
                                
                                <Text fontSize='lg'>
                                    works.moti@gmail.com
                                </Text>
                                <FontAwesomeIcon icon={faEnvelopeSquare} size="xl" />
                            </Stack>
                
                        </a>
                    </div>

                    <div className={styles.copy}>
                        © {yearNow} MOTIWORKS
                    </div>

                </div>

            </div> {/* bottomContainer */}
            
        </Box>
    );
}

export default FooterSection;