import styles from "../styles/ScrollyText.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const ScrollyText = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);
  

  useEffect(() => {
    
    gsap.fromTo(
      ".scrollyContainer",
      { x: -120 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#gallerySectionSpacer",
          start: "50% 50%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );

    // gsap.to(".scrollyWords", {
    //   xPercent: -50,
    //   ease: "none",
    //   duration: 15,
    //   repeat: -1,
    // });

    // ScrollTrigger.refresh();
  }, []);

  return (
    <div className={`scrollyContainer ${styles.scrollyContainer}`}>
      <div className={`scrollyWords ${styles.scrollyWords}`}>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
      </div>
    </div>
  );
};

export default ScrollyText;

// https://greensock.com/forums/topic/27028-looping-text-with-variable-length/
