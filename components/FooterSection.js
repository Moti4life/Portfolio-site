import styles from '../styles/FooterSection.module.css'
import { Heading, Text } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

import { Stack, Flex } from "@chakra-ui/react";

const FooterSection = () => {

    const yearNow = new Date().getFullYear()

    return (
        <div className={styles.footerContainer}>
            <Heading size='lg'>Around the Web</Heading>
            <div className={styles.linkContainer}>
                <div className={styles.linkOut}>
                    <a href='https://github.com/moti4life' target={"_blank"} rel="noopener noreferrer" >
                        <Stack direction={"row"} spacing={'.5rem'}>
                            <FontAwesomeIcon icon={faGithubSquare} size="xl"/>
                            <Text>                            
                                GitHub
                            </Text>
                        </Stack>
                    </a>
                </div>
                <div className={styles.linkOut}>
                    <a  href='https://github.com/moti4life' >
                        
                        <Stack direction={"row"} spacing={'.5rem'}>
                            <FontAwesomeIcon icon={faEnvelopeSquare} size="xl" />
                            <Text>                            
                                Email me
                            </Text>
                        </Stack>
                        
                    </a>
                </div>
                
            </div>

            <div className={styles.copy}>
                © {yearNow} Moti's
            </div>
        </div>
    );
}

export default FooterSection;