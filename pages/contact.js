import styles from "../styles/contact.module.css";
import FooterSection from "../components/FooterSection";

const contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <span className={styles.contactHeading}>Contact</span>
      </div>
      <FooterSection />
    </>
  );
};

export default contact;
