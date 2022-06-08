import Layout from "../components/Layout";
import styles from '../styles/aboutPage.module.css'
import Head from "next/head";
import About from '../components/About'

const about = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.aboutContainer}>
                <About />
            </div>
        </Layout>
    );
}

export default about;