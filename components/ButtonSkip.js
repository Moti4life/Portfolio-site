import styles from "../styles/ButtonSkip.module.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";

const ButtonSkip = ({ link, title }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      gsap.set("#mainContainer", { opacity: 0 });
      gsap.to("#mainContainer", { opacity: 1, delay: 0.6 });
    }
  }, [fade]);

  return (
    <>
      <div className={`skipContainer ${styles.skipContainer}`}>
        <a
          id={"skipBtn"}
          className={`skipButton ${styles.skipButton}`}
          href={link}
          onClick={() => {
            setFade(true);
            setTimeout(() => {
              setFade(false);
            }, 1000);
          }}
        >
          <div className={`${styles.buttonTitle}`}>
            <span className="buttonTitle">{title}</span>
          </div>
          <div
            style={{ borderTop: "none", borderLeft: "none" }}
            className={styles.skipArrow}
          ></div>
        </a>
      </div>
      {/* <div className={fade ? `${styles.skipBlink}` : ""}></div> */}
    </>
  );
};

export default ButtonSkip;
