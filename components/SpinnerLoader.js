import { Spinner } from "@chakra-ui/react";
import styles from '../styles/SpinnerLoader.module.css'

const SpinnerLoader = () => {
    return (
        <div className={styles.spinnerContainer}>
            <Spinner
            thickness='3px'
            speed='0.75s'
            emptyColor='gray.200'
            color='jade.400'
            size='xl'
        />
        </div>
    );
}

export default SpinnerLoader;