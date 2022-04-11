import styles from "../styles/contact.module.css";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <span className={styles.contactHeading}>Contact</span>
      </div>
      
    </Layout>
  );
};

export default contact;
