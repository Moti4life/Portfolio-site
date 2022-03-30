import { Heading } from "@chakra-ui/react";
import styles from '../styles/MWBrand.module.css'

const MWbrand = () => {
    return (
        <>
            <div id='brandLogo' className={styles.brandContainer}>
                <Heading size='xl'>MW</Heading>
            </div>
        </>
    );
}

export default MWbrand;