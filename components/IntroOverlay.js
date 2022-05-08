import styles from "../styles/IntroOverlay.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useColorModeValue } from "@chakra-ui/react";


const IntroOverlay = () => {
  gsap.registerPlugin(ScrollTrigger);
  const introBgColor = useColorModeValue("#f2efeb", "#141414")

  useEffect(() => {
    const introTime = gsap.timeline();

    if (!sessionStorage.getItem("hasPlayedAnimation")) {
      introTime
        .to("body", { overflowY: "hidden" })
        .to(".bgDiv", { display: "block" })
        .fromTo(
          ".letterPanel",
          { y: 1000, display: "block" },
          { y: 0, duration: 0.4, stagger: 0.1, delay: 1 }
        )
        .to(".letterPanelOther", {
          opacity: 0,
          delay: 0.8,
          stagger: -0.2,
          duration: 0.2,
        })
        .fromTo(
          ".infoPanel",
          { width: "10vw", display: "flex" },
          { width: "50vw", duration: 0.1 }
        )
        .fromTo(
          ".info",
          { display: "none" },
          { display: "block", duration: 0.1 }
        )
        .fromTo(".info", { y: 300 }, { y: 0, duration: 0.6, stagger: 0.2 })
        .to(".letterPanel", {
          y: "-50%",
          rotateX: "90deg",
          duration: 0.4,
          delay: 0.7,
          ease: "power3.in",
        })
        .to(".info", {
          y: "-50%",
          rotateX: "90deg",
          duration: 0.4,
          delay: -0.4,
          ease: "power3.in",
        })

        .fromTo(
          ".wipePanel",
          { y: "100%", height: "100vh" },
          { y: "0%", ease: "power1.in", duration: 0.5, delay: -0.1 }
        )
        .to(".infoPanel", { display: "none", duration: 0.1 })
        .to(".letterPanel", { display: "none", duration: 0.1 })
        .to(".bgDiv", { backgroundColor: "transparent" })
        .to("body", { overflowY: "auto" })

        .to(".wipePanel", { height: 0, duration: 0.5, ease: "power1.in" })

        .to(".bgDiv", { display: "none" })
        

        .fromTo(
          "#brandLogo",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, ease: "power3.in", duration: 0.3 }
        )
        .fromTo(
          "#navOnly",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, ease: "power3.in", duration: 0.3, delay: -0.1 }
        )
        .fromTo(
          "#burger",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, ease: "power3.in", duration: 0.3, delay: -0.1 }
        );
    }

    sessionStorage.setItem("hasPlayedAnimation", true);

    introTime.to(".bgDiv", { display: "none" })
    

    //scrolltrigger animation not ok with hot reload

    // gsap.fromTo(
    //   ".heroTitle",
    //   { y: "0%" },
    //   {
    //     y: "-100%",
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".page1",
    //       start: "0%",
    //       end: "100%",
    //       // markers: true,
    //       scrub: true,
    //       pin: true,
    //     },
    //   }
    // );

    //----------- gallery

    // make sure to that ScrollTriggers are killed on page/route change
    // https://greensock.com/forums/topic/25893-scrolltrigger-issue-with-react/?do=findComment&comment=125755
    // return () => {
    // .kill();
    //   // .disable() not recognized?? not sure
    // }
  }, []);

  return (
    <>
      <div style={{backgroundColor: introBgColor}} className={`bgDiv ${styles.bgDiv}`}>
        <div className={`brandPanels ${styles.brandPanels}`}>
          <div className={`letterContainer ${styles.letterContainer}`}>
            <h1 className={`letterPanel ${styles.letters}`}>MW</h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              oo
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              tr
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              ik
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              .s
            </h1>
          </div>
        </div>

        <div className={`infoPanel ${styles.infoPanel}`}>
          <div className={`infoContainer ${styles.infoContainer}`}>
            <h2 className={`info ${styles.info}`}>Moti.</h2>
          </div>
          <div className={`infoContainer ${styles.infoContainer}`}>
            <h2 className={`info ${styles.info}`}>Web developer</h2>
          </div>
        </div>

        <div className={`wipePanel ${styles.wipePanel}`}></div>
      </div>
    </>
  );
};

export default IntroOverlay;
