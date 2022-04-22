import styles from '../styles/CustomLink2.module.scss'
import Link from 'next/link'

const CustomLink2 = ({ link, title}) => {
    return (
        <div className={styles.linkContainer}>
            <Link scroll={false} href={link}>{title}</Link>
        </div>
    );

    //Solving the scroll on link change issue
    //https://wallis.dev/blog/nextjs-page-transitions-with-framer-motion
}

export default CustomLink2;