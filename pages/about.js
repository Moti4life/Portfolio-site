import Layout from "../components/Layout";
import styles from '../styles/aboutPage.module.css'

const about = () => {
    return (
        <Layout>
            <div className={styles.aboutContainer}>
                this is the about page
            </div>
        </Layout>
    );
}

export default about;