import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

import {
  useDisclosure,
  Button,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { useRef } from "react";

import styles from "../styles/Burger.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import SpinnerLoader from "./SpinnerLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faHouseChimneyWindow,
  faLaptopCode,
  faIdCard,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
/* import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; */
import { motion } from "framer-motion";

const DynamicComponent = dynamic(() => import("../components/SceneLoader"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});

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
        <Link href={link}>
          <Button
            width={"100%"}
            maxWidth={"30rem"}
            onClick={() => onClose()}
            size="xl"
            variant={"ghost"}
          >
            <Flex
              padding={"1rem"}
              flexDirection={"row"}
              gap={".5rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <span className={styles.drawerNav}>
                <FontAwesomeIcon size={"2xs"} icon={icon} /> {title}
              </span>
            </Flex>
          </Button>
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

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
        placement="right"
      >
        <DrawerOverlay />

        <DrawerContent justifyContent={'space-between'}>
          <DrawerCloseButton />

          <DrawerHeader ></DrawerHeader>

          <motion.div
            variants={drawerAnim}
            initial={drawerAnim.offScreen}
            whileInView={drawerAnim.onScreen}
            viewport={drawerAnim.viewport}
            
            className={styles.drawerBodyContainer}
          >
            <DrawerBody
              display="flex"
              flexDirection="column"
              alignItems={"center"}
              className={styles.drawerBody}
            >
              <Flex
                gap={"1rem"}
                width={"100%"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
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
                {/* <Link href='/works'>
                                      <Button onClick={() => onClose()} size='xl' width={'47%'}>
                                          <Flex padding={'2rem'} flexDirection={"column"} gap={'.5rem'} justifyContent={"center"} alignItems={'center'}>
                                              <FontAwesomeIcon size={'2x'} icon={faLaptopCode} />
                                              <Text>WORKS</Text>
                                          </Flex>
                                      </Button>
                                  </Link>
                                  <Link href='/about'>
                                      <Button onClick={() => onClose()} size='xl' width={'47%'}>
                                          <Flex padding={'2rem'} flexDirection={"column"} gap={'.5rem'} justifyContent={"center"} alignItems={'center'}>
                                              <FontAwesomeIcon size={'2x'} icon={faUserTie} />
                                              <Text>ABOUT</Text>
                                          </Flex>
                                      </Button>
                                  </Link>
                                  <Link href='/contact'>
                                      <Button onClick={() => onClose()} size='xl' width={'47%'}>
                                          <Flex padding={'2rem'} flexDirection={"column"} gap={'.5rem'} justifyContent={"center"} alignItems={'center'}>
                                              <FontAwesomeIcon size={'2x'} icon={faIdCard} />
                                              <Text>CONTACT</Text>
                                          </Flex>
                                      </Button>
                                  </Link> */}
                {/* <Link href='/works'><Button onClick={() => onClose()} leftIcon={<FontAwesomeIcon icon={faLaptopCode} />} >WORKS</Button></Link>
                                  <Link href='/about'><Button onClick={() => onClose()} leftIcon={<FontAwesomeIcon icon={faUserTie} />} >ABOUT</Button></Link>
                                  <Link href='/contact'><Button onClick={() => onClose()} leftIcon={<FontAwesomeIcon icon={faIdCard} />} >CONTACT</Button></Link> */}
              </Flex>

              <div className={styles.modelContainer}>
                <DynamicComponent />
              </div>
            </DrawerBody>
          </motion.div>

          <DrawerFooter>
            <Button
              onClick={toggleColorMode}
              colorScheme={colorModeSwitch}
              size="lg"
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Burger;
