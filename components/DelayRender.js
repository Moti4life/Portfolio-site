import { useState, useEffect } from "react";

import SpinnerLoader from './SpinnerLoader'

const DelayRender = ({ children, waitTime }) => {

    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        const timer = setTimeout( () => {
            setIsShown(true)
        }, waitTime)
        return () => clearTimeout(timer)

    }, [waitTime])

    return isShown ? children : <SpinnerLoader />
}

export default DelayRender;