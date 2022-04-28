import styles from "../styles/About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBurger } from "@fortawesome/free-solid-svg-icons";

import ShowItem from "./ShowItem";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let panelGroup = gsap.utils.toArray(".aboutPanel");

    panelGroup.forEach((panel) => {
      gsap.fromTo(
        panel,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            start: "0% 100%",
            end: "60% 100%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // if (panel.className.includes("offset")) {
      //   gsap.fromTo(
      //     panel,
      //     { x: "120%", opacity: 0 },
      //     {
      //       x: "0%",
      //       opacity: 1,
      //       scrollTrigger: {
      //         trigger: panel,
      //         start: "0% 60%",
      //         end: "100% 70%",
      //         scrub: true,
      //         // markers: true,
      //       },
      //     }
      //   );
      // } else {
      //   gsap.fromTo(
      //     panel,
      //     { x: "-120%", opacity: 0 },
      //     {
      //       x: "0%",
      //       opacity: 1,
      //       scrollTrigger: {
      //         trigger: panel,
      //         start: "0% 60%",
      //         end: "100% 70%",
      //         scrub: true,
      //         // markers: true,
      //       },
      //     }
      //   );
      // }
    });
  }, []);

  return (
    <div className={`aboutContainer ${styles.aboutContainer}`}>
      {/* <div className={styles.panelBuffer}></div> */}

      <div className={`aboutPanel ${styles.aboutPanel}`}>
        <h2>About Me</h2>
        <p>
          I'm a web developer with a passion for learning Also a car enthusiast;
          he likes to tinker and learn how to fix things.
          <br />
          <br />
          On days where he is not working; he spends his time surrounded by
          loved ones and things that he likes to do.
        </p>
        <span className={styles.spanConnect}>Like being a&nbsp;</span>
        <div className={styles.showItemContainer}>
          <ShowItem
            imgUrl={"/runGif.gif"}
            imgHeight={"150px"}
            imgWidth={"300px"}
            children={
              <h3 className={styles.driveRole}>
                <FontAwesomeIcon icon={faGear} size="sm" /> head
              </h3>
            }
          />
        </div>
      </div>

      <div
        className={`aboutPanel offset ${styles.aboutPanel} ${styles.offset}`}
      >
        <h2>Right now</h2>
        <p>
          Practicing Nextjs/React and improving css design skills; Learning lots
          from youtube, from creators who focus on design / UI and UX / motion
          and animation; to those whose craft is the backend.
          <br />
          <br />
          Having fun building these voxel models / using blender for material
          effects; build recommendations for gaming system units. Everyday
          finding a little bit of myself.
        </p>
        <span className={styles.spanConnect}>Honing my &nbsp;</span>
        <div className={styles.showItemContainer}>
          <ShowItem
            imgUrl={"/matrixGifSmol.gif"}
            imgHeight={"230px"}
            imgWidth={"150px"}
            children={
              <h3 className={styles.devRole}>&lt;webDeveloper /&gt;</h3>
            }
          />
        </div>
        <span className={styles.spanConnect}>&nbsp;skills</span>
      </div>

      <div className={`aboutPanel ${styles.aboutPanel}`}>
        <h2>Credits</h2>
        <p>
          This part is to give credit to the creators who made all of those
          reseach materials / videos / instructions around the net. Thank you
          very much for making the internet better and easier. Also, to all the
          people who make good food!
        </p>
        <span className={styles.spanConnect}>especially&nbsp;</span>
        <div className={styles.showItemContainer}>
          <ShowItem
            imgUrl={"/streetFood.gif"}
            imgHeight={"230px"}
            imgWidth={"150px"}
            children={
              <h3 className={styles.foodRole}>
                <div className={styles.stickFood}>
                  <Image src={"/isaw.png"} layout="fill" objectFit="contain" />
                </div>
                treet fo
                <FontAwesomeIcon icon={faBurger} size="xs" />d
              </h3>
            }
          />
        </div>
      </div>
    </div> /* --aboutContainer */
  );
};

export default About;
