import { useState, useEffect } from "react";

import SpinnerLoader from './SpinnerLoader'
import { useColorModeValue } from "@chakra-ui/react";

const DelayLoaderOverlay = ({ waitTime }) => {
    const [isShown, setIsShown] = useState(false)
    const spinnerBgColor = useColorModeValue('#141414', '#f2efeb')

    useEffect(() => {
        const timer = setTimeout( () => {
            setIsShown(true)
        }, waitTime)
        return () => clearTimeout(timer)

    }, [waitTime])

  return isShown ? <></> : 
  <div style={{ position: "fixed", zIndex: "3", backgroundColor: spinnerBgColor, width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <SpinnerLoader />
  </div>
};

export default DelayLoaderOverlay;
