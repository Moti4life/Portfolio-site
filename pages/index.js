import Head from "next/head";
import styles from "../styles/Home.module.css";

import Gallery from "../components/Gallery";

import { motion } from "framer-motion";

import { Box } from "@chakra-ui/react";

import { createClient } from "contentful";
import Animation from "../components/Animation";

const Home = ({ studies }) => {
  // console.log("studies from contentful: ", studies);

  Animation();

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{ opacity: 0}}
    >
      <Head>
        <title>Moti's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box className="page1">
          <div className={`heroTitleContainer`}>
            <h1 className="heroTitle">MOTI</h1>
          </div>
          <div className={`heroTitleContainer`}>
            <h1 className="heroTitle">WORKS</h1>
          </div>
        </Box>

        <div className="pageFiller">page 2</div>

        <Gallery studies={studies} />

        <div className="pageFiller">page after gallery</div>

        
        
      </main>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  // await connectDB();

  /* const resWork = await worksModel.find({});
  const workResults = JSON.parse(JSON.stringify(resWork)); */

  // console.log('workresults: ', workResults);

  // const results = await Info.find({ name: { $regex : `${searchItem}`, $options: 'i' } }).lean()

  //https://github.com/vercel/next.js/issues/11993#issuecomment-617916930
  //For those of you still dealing with this
  //you can continue with the JSON.parse(JSON.stringify) hack or you can make sure your data consists of easily-serializable primitives.

  

  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENTDELIVERY,
  });

  const resContentful = await client.getEntries({ content_type: "studies" });
  const studies = resContentful.items;

  

  return {
    props: {
      // workResults,
      studies,
    },
    revalidate: 10
  };

  //----for revalidate
  //https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
};

export default Home;
