import styles from "../styles/ScrollyText.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


const ScrollyText = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);
  // https://greensock.com/forums/topic/24286-scrolltrigger-and-webpack-prod-build/?do=findComment&comment=115701
  gsap.core.globals("ScrollTrigger", ScrollTrigger);

  useEffect(() => {
    
    gsap.fromTo(
      ".scrollyContainer",
      { xPercent: -120 },
      {
        xPercent: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#gallerySectionSpacer",
          start: "25% 80%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.to(".scrollyWords", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

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
// https://greensock.com/forums/topic/24286-scrolltrigger-and-webpack-prod-build/?do=findComment&comment=115701