import { Heading } from "@chakra-ui/react";
import styles from '../styles/MWBrand.module.css'
import Link from 'next/link'

const MWbrand = () => {
    return (
        <Link href={'/'}>
            <div id='brandLogo' className={styles.brandContainer}>
                <Heading size='xl'>MW</Heading>
            </div>
        </Link>
    );
}

export default MWbrand;