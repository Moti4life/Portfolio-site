import styles from "../styles/ModelCanvas.module.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import {
  EffectComposer,
  // DepthOfField,
  Bloom,
  // Noise,
  // Vignette,
} from "@react-three/postprocessing";

// import RxScene from "./RxScene";
import DelayLoaderOverlay from "../components/DelayLoaderOverlay";
// import ButtonSkip from "../components/ButtonSkip";
import TestScene from "./TestScene";
// import { Box } from "@react-three/drei";

const TestCanvas = () => {
  /* const boxRef = useRef();

  useEffect(() => {
    console.log("boxRef.current: ", boxRef.current);
  }, []); */

  return (
    <div className={`mainCanvas`}>
      {/* <div className={styles.pageFiller}></div> */}
      <DelayLoaderOverlay waitTime={4000} />

      <div name={"doNotRemoveThisDiv. it will break the chakra drawer"}></div>

      <div className={`carModelContainer ${styles.carModelContainer}`}>
        <div className={`carModelOverlay ${styles.carModelOverlay}`}></div>
        <div id="bgText1Container" className={styles.bgText1Container}>
          <div children={"MOTI"} className={`bgText1 ${styles.bgText1}`}></div>
          <div children={"WORKS"} className={`bgText1 ${styles.bgText1}`}></div>
          <div children={"MOTI"} className={`bgText1 ${styles.bgText1}`}></div>
          <div children={"WORKS"} className={`bgText1 ${styles.bgText1}`}></div>
          <div children={"MOTI"} className={`bgText1 ${styles.bgText1}`}></div>
          <div children={"WORKS"} className={`bgText1 ${styles.bgText1}`}></div>
        </div>

        <div className={`carModel ${styles.carModel}`}>
          <Canvas /* frameloop="demand" */ shadows>
            <Suspense fallback={null}>
              <TestScene />
              {/* <Box  /> */}
            </Suspense>
            <EffectComposer>
              <Bloom
                intensity={0.3}
                height={1200}
                opacity={3}
                luminanceThreshold={0}
                luminanceSmoothing={1}
              />
              {/* <Vignette eskil={false} offset={0.1} darkness={1.4} /> */}
            </EffectComposer>
          </Canvas>
          {/* <div ref={boxRef} style={{width: "200px", height: "200px", backgroundColor: "aqua"}}>
              box
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestCanvas;
