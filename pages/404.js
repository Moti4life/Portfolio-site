// import FallbackWorkItem from "../components/FallbackWorkItem"
import styles from '../styles/Custom404.module.css'
import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from "next/head";

const Custom404 = () => {
    return(
        <motion.div
        className={styles.mainContainer}
        
        
        >
            <Head>
                <title>page not found; error 404</title>
            </Head>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: .3}}
            >
                <Heading>Have you lost your way?</Heading>
                <br />
                <Text maxWidth={'40ch'}>Sorry, we could not find that page. Here is a portal back to the Home Page.</Text>
            </motion.div>
        
            <motion.div className={styles.portalContainer}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0, scale: 5, y: 0}}
            transition={{ duration: 1}}
            >
                <Link scroll={false} href={'/'}><div className={styles.portalOverlay}></div></Link>
                <object type="image/svg+xml" data="/portal.svg">svg-animation</object>
            </motion.div>
        
        
        </motion.div>
    )
}

export default Custom404