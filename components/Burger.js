import {
  Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import {
  useDisclosure,
  Button,
  // Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { useRef } from "react";

import styles from "../styles/Burger.module.scss";
import Link from "next/link";
// import dynamic from "next/dynamic";
// import SpinnerLoader from "./SpinnerLoader";
import SceneLoader from './SceneLoader'
import DelayRender from "./DelayRender";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faHouseChimneyWindow,
  faLaptopCode,
  faIdCard,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

// import { useEffect } from "react";
/* import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; */
import { motion } from "framer-motion";

import DarkLightButton from "./DarkLightButton";

// const DynamicComponent = dynamic(() => import("./SceneLoader"), {
//   ssr: false,
//   loading: () => <SpinnerLoader />,
// });


const Burger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { toggleColorMode } = useColorMode();

  // const navbarBackground = useColorModeValue("jade.50", "gray.800")
  const colorModeSwitch = useColorModeValue("purple", "orange");

  const drawerAnim = {
    offScreen: {
      opacity: 0,
      x: 100,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    viewport: {
      once: true,
      amount: 0.1,
    },

    // exit: { opacity: 0, transition: { duration: 1 }}
  };

  const DrawerButton = ({ link, icon, title }) => {
    return (
      <div className={`drawerButtonContainer ${styles.drawerButtonContainer}`}>
        <Link scroll={false} href={link}>
          <div onClick={() => onClose()}>
            <span className={styles.drawerNav}>
              <FontAwesomeIcon size={"xs"} icon={icon} width={"48px"} />
              {title}
            </span>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div id="burger" className={styles.burgerContainer}>
        <Button
          ref={btnRef}
          colorScheme={"blackAlpha"}
          backgroundColor={"#181818"}
          border={"2px"}
          borderColor={"jade.200"}
          onClick={() => onOpen()}
          padding={"0"}
        >
          <div className={styles.burgerLines}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
        </Button>
      </div>

      <DarkLightButton />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
        placement="right"
        // blockScrollOnMount={false}
      >
        <DrawerOverlay />

        <DrawerContent justifyContent={"space-between"}>
          <DrawerCloseButton size={"lg"} zIndex={"2"} />

          <motion.div
            variants={drawerAnim}
            initial={drawerAnim.offScreen}
            whileInView={drawerAnim.onScreen}
            viewport={drawerAnim.viewport}
            className={styles.drawerBodyContainer}
          >
            <Button
              onClick={toggleColorMode}
              colorScheme={colorModeSwitch}
              size="lg"
              margin={'1rem'}
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
            </Button>
            <div className={styles.drawerBody}>
              <div className={styles.optionContainer}>
                <DrawerButton
                  link={"/"}
                  title={"HOME"}
                  icon={faHouseChimneyWindow}
                />
                <div className={styles.divider}></div>
                <DrawerButton
                  link={"/works"}
                  title={"WORKS"}
                  icon={faLaptopCode}
                />
                <div className={styles.divider}></div>
                <DrawerButton
                  link={"/about"}
                  title={"ABOUT"}
                  icon={faUserTie}
                />
                <div className={styles.divider}></div>
                <DrawerButton
                  link={"/contact"}
                  title={"CONTACT"}
                  icon={faIdCard}
                />
              </div>

              <div className={styles.modelContainer}>
                <DelayRender waitTime={800}> 
                  <SceneLoader />
                </DelayRender>
                
              </div>
            </div>
          </motion.div>

          {/* <DrawerFooter>

            <Button
              onClick={toggleColorMode}
              colorScheme={colorModeSwitch}
              size="lg"
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
            </Button>

          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Burger;
