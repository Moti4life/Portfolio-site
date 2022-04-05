import styles from '../styles/CustomLink.module.css'
import Link from "next/link";

const CustomLink = ({ link, title }) => {
    return (
        <div className={styles.linkContainer}>
            
            <Link href={link}>{title}</Link>
            
        </div>
    );
}

export default CustomLink;