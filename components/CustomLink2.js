import styles from '../styles/CustomLink2.module.css'
import Link from 'next/link'

const CustomLink2 = ({ link, title}) => {
    return (
        <div className={styles.linkContainer}>
            
            <Link href={link}>{title}</Link>
            
        </div>
    );
}

export default CustomLink2;