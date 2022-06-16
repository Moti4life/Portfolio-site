import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";

import Navbar from "../components/Navbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Cursor from "../components/Cursor";
import { AnimatePresence } from "framer-motion";
import FooterSection from "../components/FooterSection";
// import Intro from "../components/Intro";
import { useTransitionFix } from '../utils/useFixTransitions'

import "../styles/fonts.css"

function MyApp({ Component, pageProps, router }) {

  useTransitionFix();
  return (
    <ChakraProvider theme={theme}>
      <div className="bodyContainer">
        {/* <Intro /> */}
        <Cursor />
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          initial={false} 
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <FooterSection />
      </div>
    </ChakraProvider>
  );
}
// https://www.framer.com/docs/animate-presence/###initial
// https://github.com/framer/motion/issues/1375 for AnimatePresence; specifying a key for the component
// https://github.com/james-wallis/wallis.dev/blob/master/pages/_app.tsx#L61 for onExitComplete={() => window.scrollTo(0, 0)}

export default MyApp;
