import Head from "next/head";
import styles from "../styles/Home.module.css";

import Gallery from "../components/Gallery";
import ModelCanvas from "../components/ModelCanvas";
import ButtonSkip from "../components/ButtonSkip";

import { motion } from "framer-motion";

import { createClient } from "contentful";
import TestSpacer from "../components/TestSpacer";
import TestCanvas from "../components/TestCanvas";

const Home = ({ studies }) => {
  // console.log("studies from contentful: ", studies);

  // https://greensock.com/forums/topic/28793-pinning-and-pin-spacer-gap/
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Moti Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainContainer" className={styles.main}>
        <div id="modelCanvasSection">
          <ModelCanvas />
          {/* <TestSpacer /> */}
          {/* <TestCanvas /> */}
          {/* <TestSpacer /> */}
        </div>
        <div id="gallerySection">
          gallerySection
          {/* <Gallery studies={studies} /> */}
          
        </div>

        <div className="filler pageFiller">page before gallery</div>

        <div id="page3" className="pageFiller">
          page 3
        </div>
      </main>

      {/* <ButtonSkip title={"scroll"} link={"#page3"} /> */}
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
    revalidate: 10,
  };

  //----for revalidate
  //https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
};

export default Home;
