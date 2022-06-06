import styles from "../styles/ScrollyText.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";

const ScrollyText = ({ trigger, text, fromX, toX, length }) => {
  gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(TextPlugin);
  const scrollyTextRef = useRef();
  // const textRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallerySectionSpacer",
        start: "top 90%",
        end: "bottom 70%",
        markers: true,
        scrub: 2,
      },
    });

    tl.fromTo(scrollyTextRef.current, { xPercent: 100 }, { xPercent: 0 });

    gsap.set(".textScroll", {
      x: (i) => i * 200,
    });
    gsap.to(".textScroll", {
      duration: 5,
      ease: "none",
      // x: "+=500",
      x: `+=${length}`,
      repeat: -1,
      modifiers: {
        // x: gsap.utils.unitize((x) => parseFloat(x) % 500),
        x: gsap.utils.unitize((x) => parseFloat(x) % `${length}`),
      },
    });

    // console.log(scrollyTextRef);
    // ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={scrollyTextRef} className={styles.scrollyContainer}>
      <div className={styles.scrollyWords}>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
        <span className={`textScroll ${styles.scrollyWord}`}>{text}</span>
      </div>
    </div>
  );
};

export default ScrollyText;
