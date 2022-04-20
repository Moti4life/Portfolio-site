import Layout from "../components/Layout";
import styles from '../styles/aboutPage.module.css'
import Head from "next/head";
import About from '../components/About'
import WaterText from '../components/WaterText'

const about = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.aboutContainer}>
                <WaterText fontSize={'20vmax'} title={'Moti'} right={'-3%'} top={'10%'} />
                <About />
            </div>
        </Layout>
    );
}

export default about;