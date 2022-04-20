import styles from '../styles/WaterText.module.scss'

const WaterText = ({ title, right, bottom, top, left, fontSize }) => {
    return (
        <div className={styles.waterTextContainer} style={{ right, bottom, top, left, fontSize}}>
            <span className={styles.waterText}>{title}</span>
        </div>
    );
}

export default WaterText;