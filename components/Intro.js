import styles from "../styles/Intro.module.scss";
import flapStyles from "../styles/SplitFlap.module.css";
import { gsap } from "gsap/dist/gsap";
import { useState, useEffect } from "react";

import { FlapDisplay, Presets } from "react-split-flap-effect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// props to Justin Kerr Sheckler for split flap
// https://www.npmjs.com/package/react-split-flap-effect

const CreateSegments = () => {
  let segments = [];
  for (let index = 0; index < 25; index++) {
    segments.push(
      <div className={`segment ${styles.segment}`} key={index}></div>
    );
  }

  return segments;
};

const Intro = () => {
  const [flapValueTop, setFlapValueTop] = useState("");
  const [flapValue, setFlapValue] = useState("");
  const [flapValue2, setFlapValue2] = useState("");
  const [flapValue3, setFlapValue3] = useState("");
  const [flapValueBot, setFlapValueBot] = useState("");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // console.log("intro useEffect firing");
    //https://greensock.com/forums/topic/25270-can-we-use-matchmedia-for-timelines-outside-the-scrolltrigger/?do=findComment&comment=122504
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 800px)": () => {
        // https://greensock.com/forums/topic/25020-scrolltrigger-matchmedia-does-not-work-as-i-expected/?do=findComment&comment=120333
        let introTl = gsap.timeline();

        // SET TO ! and place inside macch media
        if (!sessionStorage.getItem("hasPlayedAnimation")) {
          // scrollbarGutter needed for model alignment
          introTl
            .set("html", { scrollbarGutter: "stable" })
            .set("body", { overflowY: "hidden" })
            .set(".secondaryCursor", { opacity: 0 })
            .set(".mainCursor", { opacity: 0 });

          // set flap values
          introTl
            .add(() => {
              setFlapValueTop("  0  ");
              setFlapValue(" 000 ");
              setFlapValue2("00000");
              setFlapValue3(" 000 ");
              setFlapValueBot("  0  ");
            })
            .add(() => {
              setFlapValueTop("  1  ");
              setFlapValue(" 111 ");
              setFlapValue2("11111");
              setFlapValue3(" 111 ");
              setFlapValueBot("  1  ");
            }, ">+0.45")
            .add(() => {
              setFlapValueTop("  2  ");
              setFlapValue(" 111 ");
              setFlapValue2("21212");
              setFlapValue3(" 111 ");
              setFlapValueBot("  2  ");
            }, ">+0.45")
            .add(() => {
              setFlapValueTop("");
              setFlapValue("WEL");
              setFlapValue2("  -");
              setFlapValue3(" COME");
              setFlapValueBot("");
            }, ">+0.7")
            .add(() => {
              setFlapValue("");
              setFlapValue2(" TO");
              setFlapValue3("");
            }, ">+3")
            .add(() => {
              setFlapValue("MOTI");
              setFlapValue2("");
              setFlapValue3("");
            }, ">+2")
            .add(() => {
              setFlapValueTop("W");
              setFlapValue("MOTI");
              setFlapValue2("  R");
              setFlapValue3("   K");
              setFlapValueBot("    S");
            }, ">+2")
            .add(() => {
              setFlapValueTop("MMWMM");
              setFlapValue("MMWMM");
              setFlapValue2("WWWWWW");
              setFlapValue3("MMWMM");
              setFlapValueBot("MMWMM");
            }, ">+2")
            .add(() => {
              setFlapValueTop("");
              setFlapValue("");
              setFlapValue2("");
              setFlapValue3("");
              setFlapValueBot("");
            });
          // set flap and bg to transparent
          introTl
            .to(".flapDisplayContainer", { opacity: 0 }, ">+1.5")
            .set(".flapDisplayContainer", { visibility: "collapse" });

          // animate segments to reveal
          introTl.to(".segment", {
            // scale: 0.03,
            // opacity: 0,
            scaleY: 0,
            stagger: {
              each: 0.04,
              from: [0, 1],
              // from: "center",
              ease: "none",
            },
          });

          //set scrollbarGutter back to auto
          // set custom cursor vis
          introTl
            .set("html", { scrollbarGutter: "auto" })
            .set("body", { overflowY: "auto" });
        } // !sessionStorage.getItem("hasPlayedAnimation")

        // this will still play even on different route
        // set if already played
        introTl
          .set(".introOverlayContainer", {
            display: "none",
            visibility: "collapse",
          })
          .set(
            ".flapDisplayContainer",
            { opacity: 0, visibility: "collapse" },
            ">"
          )
          .set(".segmentsContainer", {
            backgroundColor: "transparent",
            visibility: "collapse",
          });

        // vis in logo, nav, burger
        introTl
          .fromTo(
            "#brandLogo",
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, ease: "power3.in", duration: 0.3 }
          )
          .fromTo(
            "#navOnly",
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .fromTo(
            "#burger",
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .fromTo(
            "#darkLightBtn",
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .to(".secondaryCursor", { opacity: 1, duration: 0.3 })
          .to(".mainCursor", { opacity: 1, duration: 0.3 }, "<");

        return () => {
          introTl.kill();
          // console.log("introTl now on kill");
        };
      },

      // mobile / tablet
      "(max-width: 799px)": () => {
        // https://greensock.com/forums/topic/25020-scrolltrigger-matchmedia-does-not-work-as-i-expected/?do=findComment&comment=120333
        let introTlSmall = gsap.timeline();

        // SET TO ! and place inside macch media
        if (!sessionStorage.getItem("hasPlayedAnimation")) {
          // scrollbarGutter needed for model alignment
          introTlSmall
            .set("html", { scrollbarGutter: "stable" })
            .set("body", { overflowY: "hidden" })
            .set(".secondaryCursor", { opacity: 0 })
            .set(".mainCursor", { opacity: 0 });

          // set split flap for smol device
          introTlSmall
          .add(() => {
            setFlapValue("M0");
            setFlapValue2("T1");
          })
          
          // set flap and bg to transparent
          introTlSmall
            .to(".flapDisplayContainer", { opacity: 0, duration: 0.2 }, ">+6")
            .set(".flapDisplayContainer", { visibility: "collapse" });

          // animate segments to reveal
          introTlSmall.to(".segment", {
            // scale: 0.03,
            // opacity: 0,
            scaleY: 0,
            stagger: {
              each: 0.04,
              from: [0, 1],
              // from: "center",
              ease: "none",
            },
          });

          //set scrollbarGutter back to auto
          // set custom cursor vis
          introTlSmall
            .set("html", { scrollbarGutter: "auto" })
            .set("body", { overflowY: "auto" });
        } // !sessionStorage.getItem("hasPlayedAnimation")

        // this will still play even on different route
        // set on already played
        introTlSmall
          .set(".introOverlayContainer", {
            display: "none",
            visibility: "collapse",
          })
          .set(
            ".flapDisplayContainer",
            { opacity: 0, visibility: "collapse" },
            ">"
          )
          .set(".segmentsContainer", {
            backgroundColor: "transparent",
            visibility: "collapse",
          });

        // vis in logo, nav, burger
        introTlSmall
          .fromTo(
            "#brandLogo",
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, ease: "power3.in", duration: 0.3 }
          )
          .fromTo(
            "#navOnly",
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .fromTo(
            "#burger",
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .fromTo(
            "#darkLightBtn",
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 0.3,
              delay: -0.1,
            }
          )
          .to(".secondaryCursor", { opacity: 1, duration: 0.3 })
          .to(".mainCursor", { opacity: 1, duration: 0.3 }, "<");

        return () => {
          introTlSmall.kill();
          // console.log("introTlSmall now on kill");
        };
      },
    });

    sessionStorage.setItem("hasPlayedAnimation", true);

    // ScrollTrigger.refresh();
  }, []);

  return (
    <div className={`introOverlayContainer ${styles.introOverlayContainer}`}>
      <div className={`segmentsContainer ${styles.segmentsContainer}`}>
        <CreateSegments />
      </div>
      <div className={`flapDisplayContainer ${styles.flapDisplayContainer}`}>
        <FlapDisplay
          chars={Presets.ALPHANUM + ",!. -"}
          length={5}
          value={flapValueTop}
          // value={"adfeawf"}
          className={flapStyles.RSL}
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ",!. -"}
          length={5}
          value={flapValue}
          // value={"adfeawf"}
          className={flapStyles.RSL}
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ",!. -"}
          length={5}
          value={flapValue2}
          // value={"adfeawf"}
          className={flapStyles.RSL}
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ",!. -"}
          length={5}
          value={flapValue3}
          // value={"adfeawf"}
          className={flapStyles.RSL}
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ",!. -"}
          length={5}
          value={flapValueBot}
          // value={"adfeawf"}
          className={flapStyles.RSL}
        />
      </div>
    </div>
  );
};

export default Intro;
