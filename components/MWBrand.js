import styles from "../styles/MWBrand.module.scss";
import Link from "next/link";

const MWbrand = () => {
  return (
    <Link scroll={false} href={"/"}>
      <div id="brandLogo" className={styles.brandContainer}>
        <span className={styles.m}>M</span>
        <span className={styles.w}>W</span>

        <div className={styles.separator}></div>
      </div>
    </Link>
  );
};

export default MWbrand;