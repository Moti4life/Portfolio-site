import Head from "next/head";
import styles from "../styles/Home.module.css";

// import LoadingSpinner from '../components/LoadingSpinner'
// import LoadingOverlay from '../components/LoadingOverlay'
import connectDB from "../utils/db";
// import save from '../testdb'
import Info from "../models/infoModel";
import worksModel from "../models/worksModel";

import About from "../components/About";
import Gallery from "../components/Gallery";
import FooterSection from "../components/FooterSection";

import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box } from "@chakra-ui/react";

const Home = ({ workResults }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const introTime = gsap.timeline();

    if(!sessionStorage.getItem("hasPlayedAnimation")){

      introTime.to('body', { overflowY: 'hidden' })
        .fromTo('.letterPanel', { y: 1000, display: 'block' }, { y: 0, duration: .4, stagger: .1})
        .to('.letterPanelOther', { opacity: 0, delay: .8, stagger: -.2, duration: .2 })
        .fromTo('.infoPanel', { width: '10vw', display: 'flex'}, { width: '50vw', duration: .1})
        .fromTo('.info', { display: 'none' }, { display: 'block', duration: .1})
        .fromTo('.info', { y: 300 }, { y: 0, duration: .6, stagger: .2 })
        .to('.letterPanel', { y: '-50%', rotateX: '90deg', duration: .4, delay: .7, ease: 'power3.in'})
        .to('.info', { y: '-50%', rotateX: '90deg', duration: .4, delay: -.4, ease: 'power3.in'})

        .fromTo('.wipePanel', { y: '100%', height: '100vh' }, { y: '0%', ease: 'power1.in', duration: .5, delay: -.1 } )
        .to('.infoPanel', { display: 'none', duration: .1 } )
        .to('.letterPanel', { display: 'none', duration: .1 } )
        .to('.wipePanel', { height: 0, duration: .5, ease: 'power1.in' } )

        .to('body', { overflowY: 'auto' })

        .fromTo('#brandLogo', {opacity: 0}, { opacity: 1, ease: 'power3.in', duration: .2} )
        .fromTo('#navbar', {opacity: 0}, { opacity: 1, ease: 'power3.in', duration: .2, delay: -.1 } )
        .fromTo('#burger', {opacity: 0}, { opacity: 1, ease: 'power3.in', duration: .2, delay: -.1 } )
    }

    sessionStorage.setItem("hasPlayedAnimation", true)

    introTime
      .to('.heroTitle', { display: 'block' })
      .fromTo(
      ".heroTitle",
      { y: "100%" },
      {
        y: "0%",
        opacity: 1,
        ease: "power1.out",
        duration: .2,
        stagger: .1,
        /* onComplete: () => triggerByScroll() */
      }
    );

    //scrolltrigger animation not ok with hot reload

    
    gsap.fromTo(
      ".heroTitle",
      { y: "0%" },
      {
        y: "-100%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".page1",
          start: "0%",
          end: "100%",
          markers: true,
          scrub: true,
          pin: true,
        },
      }
    );
    

    /* const triggerByScroll = () => {
      let scrollTime = gsap.timeline({
        scrollTrigger: {
          trigger: ".page1",
          start: "0%",
          end: "100%",
          markers: true,
          scrub: true,
          pin: true,
        },
      });

      scrollTime.fromTo(
        ".heroTitle",
        { y: "0%" },
        {
          y: "-100%",
          ease: "power2.out", //onComplete: () => triggerByScroll2(),
        }
      );
    }; */

    /* const triggerByScroll2 = () => {
      let galleryPanels = gsap.utils.toArray('.galleryItemPanel')
      let galleryScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".galleryContainer",
          pin: true,
          scrub: 1, //number delay
          markers: true,
          // scroller: '.galleryContainer',
          snap: 1 / (galleryPanels.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          // end: "+=3500",
          start: '0%',
          end: '300%'
        }
      })

      galleryScroll.to(galleryPanels, {
        xPercent: -100 * (galleryPanels.length - 1),
        ease: "none",
      })

    }

    triggerByScroll2() */

    let galleryPanels = gsap.utils.toArray(".galleryItemPanel");
    gsap.to(galleryPanels, {
      xPercent: -100 * (galleryPanels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".galleryContainer",
        pin: true,
        start: "top 13%",
        scrub: 1,
        markers: true,
        snap: {
          snapTo: 1 / (galleryPanels.length - 1),
          inertia: false,
          // duration: { min: 0.1, max: 0.1 },
        },
        end: '+=300%'
      },
    });

    

  }, []);

  return (
    <motion.div
    /* className={styles.container}
      exit={{ opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}} */
    >
      <Head>
        <title>Moti's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Box className='page1'> 
          <div className={`heroTitleContainer`}>
            <h1 className='heroTitle'>MOTI</h1>
          </div>
          <div className={`heroTitleContainer`}>
            <h1 className='heroTitle'>WORKS</h1>
          </div>
        </Box>

        <div className="pageFiller">page 2</div>
        

        {/* <div className='pageFiller'>
          page 3
        </div>
        <div className='pageFiller'>
          page 4
        </div> */}

        <Gallery workResults={workResults} />

        <div className="pageFiller">page after gallery</div>

        <About />
        <FooterSection />
      </main>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  // let searchItem = ''
  await connectDB();
  const response = await Info.find({});
  // const results = await Info.find({ name: { $regex : `${searchItem}`, $options: 'i' } }).lean()

  const infoResults = JSON.parse(JSON.stringify(response));
  //https://github.com/vercel/next.js/issues/11993#issuecomment-617916930
  //For those of you still dealing with this
  //you can continue with the JSON.parse(JSON.stringify) hack or you can make sure your data consists of easily-serializable primitives.

  // console.log('====================================');
  // console.log('infoResults: ', infoResults);
  // console.log('====================================');

  const resWork = await worksModel.find({});
  const workResults = JSON.parse(JSON.stringify(resWork));

  // console.log('workresults: ', workResults);

  return {
    props: {
      infoResults,
      workResults,
    },
  };
};

export default Home;
