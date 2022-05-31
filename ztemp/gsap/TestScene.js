import { Box } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

const TestScene = () => {
    const boxRef = useRef()
    

    useEffect( () => {
        console.log("boxRef.current: ", boxRef.current);


        let tl = gsap.timeline();

        tl.to(boxRef.current.position, { x: 3})
        .to(boxRef.current.position, { y: 2})
        .to(boxRef.current.position, { x: -2})
        .to(boxRef.current.position, { y: -2})

        let controller = ScrollTrigger.create({
            animation: tl,
            trigger: ".carModel",
            scrub: 0.2,
            // start: "0% 0%",
            start: "top top",
            end: "+=800%",
            // markers: true,
            pin: true,
            // pin: "#mainContainer",
            // pin: '.modelCanvasContainer',
            ease: "none",
          });

    }, [])

    return (
        <Box ref={boxRef} />
    );
}

export default TestScene;