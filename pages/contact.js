import styles from "../styles/contact.module.scss";
import Layout from "../components/Layout";
import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect } from "react";

import WaterText from "../components/WaterText";

const contact = () => {
  let [copyText, setCopyText] = useState("Copy it!");

  const handleCopy = (e) => {
    navigator.clipboard.writeText("works.moti@gmail.com");
    // alert('Copied')
    setCopyText("Copied!");

    setTimeout(() => {
      setCopyText("Copy it!");
    }, 3300);
  };

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const textTl = gsap.timeline({ repeat: 3, repeatDelay: 1.3, yoyo: true });
    textTl.to("#contactMessage", {
      duration: 3,
      delay: 2,
      text: { value: "-Make it work, we will-" },
      ease: "none",
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contactContainer}>
        <WaterText fontSize={'20vmax'} title={'Contact'} right={'-10%'} bottom={'20%'} />

        <span className={styles.contactHeading}>Contact</span>

        <div className={`${styles.contactMessage}`}>
          <p>Feel free to reach out</p>
          <p>Write a line and I'll respond soon</p>
          <span id="contactMessage" >
            -Let's talk-
          </span>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactEmail}>
            <a href="mailto:works.moti@gmail.com" title="works.moti@gmail.com">
              works.moti@gmail.com
            </a>
          </div>
          <Button
            onClick={handleCopy}
            colorScheme={"blackAlpha"}
            backgroundColor={"#181818"}
            color={"whiteAlpha.900"}
            border={"2px"}
            borderColor={"jade.200"}
          >
            {copyText}
          </Button>

        </div>
      </div>
    </Layout>
  );
};

export default contact;
