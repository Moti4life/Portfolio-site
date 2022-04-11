import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";

import Navbar from "../components/Navbar";
// import DynamicLoader from '../components/DynamicLoader'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import IntroOverlay from "../components/IntroOverlay";
import Cursor from "../components/Cursor";
import Burger from "../components/Burger";
import MWbrand from "../components/MWBrand";
import { AnimatePresence } from "framer-motion";
import FooterSection from '../components/FooterSection'



function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <div className="bodyContainer">
        <IntroOverlay />
        <Cursor />
        <Navbar />
        <MWbrand />
        <Burger />

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

// https://github.com/framer/motion/issues/1375 for AnimatePresence; specifying a key for the component
// https://github.com/james-wallis/wallis.dev/blob/master/pages/_app.tsx#L61 for onExitComplete={() => window.scrollTo(0, 0)}

export default MyApp;
