import { Flex, Stack, Button } from "@chakra-ui/react";

import CustomLink from "./CustomLink";
import styles from "../styles/Navbar.module.css";
import Burger from "../components/Burger";
import MWbrand from "../components/MWBrand";

// navbar hide on scroll
// https://codepen.io/GreenSock/pen/qBawMGb
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const showAnim = gsap
      .from("#navbar", {
        yPercent: -100,
        paused: true,
        duration: .4,
        opacity: 0,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <div id="navbar" className={styles.navContainer}>
        <MWbrand />
        <Burger />
      <Flex id="navOnly" className={styles.navbar}>
        <Stack spacing={6} direction="row" align="center">
          <CustomLink link={"/works"} title={"Works"} />
          <CustomLink link={"/about"} title={"About"} />
          <CustomLink link={"/contact"} title={"Contact"} />
          <CustomLink link={"/test"} title={"404"} />
        </Stack>
      </Flex>
    </div>
  );
};

export default Navbar;
