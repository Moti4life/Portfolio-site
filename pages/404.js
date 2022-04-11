// import FallbackWorkItem from "../components/FallbackWorkItem"
import styles from '../styles/Custom404.module.css'
import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const Custom404 = () => {
    return(
        <motion.div
        className={styles.mainContainer}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0, scale: 2}}
        >
            <Heading>Have you lost your way?</Heading>
            <Text maxWidth={'40ch'}>Sorry, we could not find that page. Here is a portal back to the Home Page.</Text>
        
            <div className={styles.portalContainer}>
                <Link href={'/'}><div className={styles.portalOverlay}></div></Link>
                <object type="image/svg+xml" data="/portal.svg">svg-animation</object>
            </div>
        
        
        </motion.div>
    )
}

export default Custom404