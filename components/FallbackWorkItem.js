import styles from '../styles/FallbackWorkItem.module.css'

import { Text } from '@chakra-ui/react';
import SpinnerLoader from '../components/SpinnerLoader'

const FallbackWorkItem = () => {
    return (
        <div className={styles.fallbackContainer}>
            <div className={styles.checkMessage}>
                <Text>Currently checking for the contents of this page</Text>
            </div>
            <div className={styles.spinnerContainer}>
                <SpinnerLoader />
            </div>
        </div>
    );
}

export default FallbackWorkItem;