import { Heading } from "@chakra-ui/react";
import styles from '../styles/MWBrand.module.scss'
import Link from 'next/link'

const MWbrand = () => {
    return (
        <Link scroll={false} href={'/'}>
            <div id='brandLogo' className={styles.brandContainer}>
                <Heading size='xl' className={styles.m}>M</Heading>
                <Heading size='xl' className={styles.w}>W</Heading>

                <div className={styles.separator}></div>
            </div>
        </Link>
    );
}

export default MWbrand;