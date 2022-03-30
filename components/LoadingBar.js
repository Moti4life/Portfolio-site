import { useState } from 'react';
import styles from '../styles/LoadingBar.module.css'


const LoadingBar = ({ progress }) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${progress}%`
        }
        setStyle(newStyle)
    }, 200)

    return (
        <div className={styles.progressBar}>
            <div className={styles.progressDone} style={style}>
                {progress}%
            </div>
        </div>
    );
}

export default LoadingBar;