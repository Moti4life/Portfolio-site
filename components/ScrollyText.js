import styles from "../styles/ScrollyText.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";

const ScrollyText = ({ trigger, text }) => {
  gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(TextPlugin);
  const scrollyTextRef = useRef();

  // let size = useWindowSize();
  // console.log("size: ", size);
 
  useEffect(() => {
    gsap.fromTo(
      scrollyTextRef.current,
      { xPercent: -120 },
      {
        xPercent: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: scrollyTextRef.current,
          start: "0% 80%",
          // markers: true,
          end: "100% 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
    
    
    gsap.to(".scrollyWords", {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1,
    });

    // console.log(scrollyTextRef);
    // ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={scrollyTextRef} className={styles.scrollyContainer}>
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
