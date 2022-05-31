import {
  // Environment,
  OrbitControls,
  // PerspectiveCamera,
  // Bounds,
  Text,
  Billboard,
  AdaptiveDpr,
} from "@react-three/drei";
// import { Box, CameraShake } from "@react-three/drei";

import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import RxModel from "./RxModel";

const RxScene = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  const carRef = useRef();
  const orbitControlRef = useRef();
  const ambientLightRef = useRef();
  const pointLightRef = useRef();
  const billRef = useRef();

  useEffect(() => {
    // console.log("pointLightRef.current ", pointLightRef.current);
    // console.log(deg2rad(90), deg2rad(45));
    // console.log(
    //   "orbitControlRef.current.object ",
    //   orbitControlRef.current.object
    // );
    // console.log("carRef: ", carRef);

    let tl = gsap.timeline();

    tl.set(".skipContainer", { pointerEvents: "none" })
      .to(pointLightRef.current, { intensity: 0.2, delay: 0.5 })
      .to(
        pointLightRef.current.position,
        { x: -3, y: 12, ease: "expo.out" },
        "<"
      )
      .to(ambientLightRef.current, { intensity: 0.25 })

      // move scroll to skip / enable
      .to(".skipContainer", { left: "8%", opacity: 0.6 }, "<")
      .to(".buttonTitle", { opacity: 0, duration: 0.2 }, "<")
      .set(".buttonTitle", { text: { value: "skip" } })
      .set(".skipContainer", { pointerEvents: "auto" })
      .to(".buttonTitle", { opacity: 1, duration: 0.2 })

      // top down to rear
      .fromTo(
        orbitControlRef.current.object.position,
        { x: 0, y: 12, z: -0.1 },
        { x: 0, y: 0.7, z: -12, duration: 2 }
      )

      // stagger https://greensock.com/docs/v3/Staggers
      // Text reveal / fade
      .to(
        ".bgText1",
        {
          opacity: 1,
          stagger: {
            each: 0.1,
            from: "center",
            grid: "auto",
          },
        },
        ">-1"
      )
      .to(
        ".bgText1",
        {
          opacity: 0,
          stagger: {
            each: 0.1,
            from: "center",
            grid: "auto",
          },
        },
        "<+0.5"
      )

      //white blink
      .set(".carModelOverlay", { backgroundColor: "#ccc" })
      .set("#bgText1Container", { visibility: "collapse" }, "<")
      .to(".carModelOverlay", {
        opacity: 1,
        ease: "none",
        duration: 0.1,
        delay: 0.2,
      })

      // set cam front view
      .set(orbitControlRef.current.target, {
        x: 0,
        y: 1,
        z: 9,
      })
      .set(orbitControlRef.current.object.position, { x: 0, y: 3, z: 11 }, "<")

      //white blink
      .to(".carModelOverlay", {
        opacity: 0,
        ease: "none",
        duration: 0.1,
      })
      //set to blk
      .set(".carModelOverlay", { backgroundColor: "#131313" })

      // look from bottom to hood
      .to(orbitControlRef.current.target, {
        z: 5,
        duration: 2.5,
        ease: "power2.out",
      })
      .to(
        orbitControlRef.current.object.position,
        { y: 2, z: 10, duration: 2.5, ease: "none" },
        "<"
      )

      // transistion fade out
      .to(
        ".carModelOverlay",
        {
          opacity: 1,
          ease: "none",
          duration: 0.3,
        },
        ">-0.4"
      )

      // set right far panning
      .set(orbitControlRef.current.target, {
        x: -3,
        y: 0,
        z: -2,
      })
      .set(
        orbitControlRef.current.object.position,
        { x: -8, y: 0.5, z: 4 },
        "<"
      )
      // transistion fade in
      .to(".carModelOverlay", {
        opacity: 0,
        ease: "none",
        duration: 0.3,
      })
      // skip button out
      .to(".skipButton", { opacity: 0 }, "<")
      .to(".skipButton", { visibility: "collapse" }, "<+0.5")

      // right far panning
      .to(
        orbitControlRef.current.target,
        {
          x: 3.5,
          y: 0,
          z: -2,
          duration: 3,
        },
        "<"
      )
      .to(
        orbitControlRef.current.object.position,
        { x: -3, y: 0.5, z: 8, duration: 3 },
        "<"
      )

      // transistion fade out
      .to(
        ".carModelOverlay",
        {
          opacity: 1,
          ease: "none",
          duration: 0.3,
        },
        ">-0.4"
      )

      // set left side full view
      .set(orbitControlRef.current.target, {
        x: 0,
        y: 0,
        z: 1,
      })
      .set(
        orbitControlRef.current.object.position,
        { x: 12, y: -1.2, z: -1 },
        "<"
      )

      // set billboard pos
      .set(billRef.current.parent.position, { x: 0, y: 3.5, z: 3.5 })

      // transistion fade in
      .to(".carModelOverlay", {
        opacity: 0,
        ease: "none",
        duration: 0.3,
      })

      // walk back slow (could insert billboard here)
      // billboard re appear
      // .to(billRef.current, { text: "MotiWorks", duration: 0.1 })

      .to(
        orbitControlRef.current.object.position,
        { x: 13, z: -1.5, duration: 3 },
        "<"
      )
      .to(billRef.current, { strokeOpacity: 1, fillOpacity: 0.7 }, "<+0.6")
      .to(billRef.current, { strokeOpacity: 0, fillOpacity: 0 }, "<+1.4")

      // fast black blink
      .to(".carModelOverlay", {
        keyframes: {
          opacity: [0, 1, 0],
        },
        ease: "none",
        duration: 0.3,
      })

      // fast transitions
      // set 1st
      .set(
        orbitControlRef.current.target,
        {
          x: 0,
          y: 0.5,
          z: 1,
        },
        "<+0.15"
      )
      .set(orbitControlRef.current.object.position, { x: 5, y: -1, z: 9 }, "<")

      .to(orbitControlRef.current.object.position, {
        x: 5.1,
        y: -1.1,
        z: 9.1,
        duration: 0.3,
      })

      // fast black blink
      .to(".carModelOverlay", {
        keyframes: {
          opacity: [0, 1, 0],
        },
        ease: "none",
        duration: 0.3,
      })

      //set 2nd
      .set(
        orbitControlRef.current.target,
        {
          x: 0,
          y: 0,
          z: -4.5,
        },
        "<+0.15"
      )
      .set(
        orbitControlRef.current.object.position,
        { x: -6, y: 0, z: -4.5 },
        "<"
      )
      .to(orbitControlRef.current.object.position, { x: -6.1, duration: 0.3 })

      // fast black blink
      .to(".carModelOverlay", {
        keyframes: {
          opacity: [0, 1, 0],
        },
        ease: "none",
        duration: 0.3,
      })

      //set 3rd
      .set(
        orbitControlRef.current.target,
        {
          x: -0.5,
          y: 0,
          z: -5,
        },
        "<+0.15"
      )
      .set(
        orbitControlRef.current.object.position,
        { x: -3.5, y: -0.6, z: -7.5 },
        "<"
      )
      .to(orbitControlRef.current.object.position, { x: -3, duration: 2.5 })

      // transistion fade out
      .to(
        ".carModelOverlay",
        {
          opacity: 1,
          ease: "none",
          duration: 0.3,
        },
        ">-0.4"
      )

      // left pos / tail garnish
      .set(orbitControlRef.current.target, {
        x: 0,
        y: 0,
        z: -9,
      })
      .set(
        orbitControlRef.current.object.position,
        { x: 3, y: 0.5, z: -12 },
        "<"
      )

      // transistion fade in
      .to(".carModelOverlay", {
        opacity: 0,
        ease: "none",
        duration: 0.2,
      })
      // rear left quarter swipe left side
      .to(
        orbitControlRef.current.target,
        {
          x: 2,
          y: -0.5,
          z: 10,
          duration: 2.5,
          ease: "none",
        },
        "<"
      )
      .to(
        orbitControlRef.current.object.position,
        { x: 4, y: -0.5, z: 8, duration: 2.5, ease: "none" },
        "<"
      )

      // place cam to front
      .set(orbitControlRef.current.target, {
        x: 0,
        y: -2,
        z: 12,
      })
      .set(orbitControlRef.current.object.position, { x: 0, y: 1, z: 13 }, "<")
      // front view look up
      .to(orbitControlRef.current.target, {
        x: 0,
        y: 0,
        z: 4,
        duration: 2,
        delay: 0.2,
        ease: "back.inOut(3)",
      })

      // look closer
      .to(orbitControlRef.current.object.position, {
        x: 0,
        y: 0.6,
        z: 12,
        duration: 2,
        delay: 0.5,
        ease: "none",
      })

      // look closer / spin
      .to(orbitControlRef.current.object.position, {
        x: 0,
        y: 0,
        z: 5,
        duration: 1,
        delay: 0.5,
        ease: "none",
      })
      //https://discourse.threejs.org/t/proper-way-to-extend-orbitcontrols-to-support-camera-roll/18862/2
      .to(
        orbitControlRef.current.object.up,
        {
          keyframes: {
            x: [0, 1, 0],
            y: [1, 0, -1],
          },
          ease: "none",
          duration: 1,
        },
        "<"
      )
      .to(".carModel", { opacity: 0, duration: 0.5 }, ">-0.5")

      // place cam at right front quarter
      .set(orbitControlRef.current.target, {
        x: 0,
        y: 0,
        z: 2.5,
      })
      .set(orbitControlRef.current.object.position, { x: -4, y: 0, z: 8 }, "<")

      // re spin / step away

      .to(orbitControlRef.current.object.up, {
        keyframes: {
          x: [0, -1, 0],
          y: [-1, 0, 1],
        },
        ease: "none",
        duration: 1,
      })
      .to(".carModel", { opacity: 1, duration: 0.5 }, "<")
      .to(
        orbitControlRef.current.object.position,
        { x: -6, y: 1, z: 10, duration: 3, ease: "none" },
        "<"
      )

      // ready cam / spin stage
      .to(orbitControlRef.current.target, {
        x: 0,
        y: 1,
        z: 0,
        delay: 1,
      })
      .to(orbitControlRef.current.object.position, { y: 2, z: 12 }, "<")
      .to(orbitControlRef.current, { autoRotate: true, autoRotateSpeed: 1 })
      .set(".carModelOverlay", { visibility: "collapse" }, "<")
      // .to(".carModel", { pointerEvents: "auto" }, "<")

      // light dim
      .to(ambientLightRef.current, { intensity: 0.1, delay: 1 })
      .to(pointLightRef.current, { intensity: 0.1 }, "<")
      .to(
        pointLightRef.current.position,
        { x: 0, y: 20, ease: "expo.out" },
        "<"
      )

      // cam look up and out
      .to(orbitControlRef.current.target, {
        y: 12,
      });

    let controller = ScrollTrigger.create({
      animation: tl,
      trigger: "#modelCanvasSection",
      scrub: 0.2,
      // start: "0% 0%",
      end: "+=800%",
      // markers: true,
      pin: true,
      // pin: "#mainContainer",
      // pin: '#modelCanvasSection',
      ease: "none",
      // anticipatePin: 1,
      refreshPriority: 1,
      // set refreshPriority for animation sequence
    });

    ScrollTrigger.refresh();
    // call ScrollTrigger.refresh() for start/end pin refresh
  }, []);

  return (
    <>
      <AdaptiveDpr pixelated />
      <ambientLight intensity={0.05} ref={ambientLightRef} />
      <pointLight
        castShadow
        position={[0, 20, 0]}
        intensity={0}
        ref={pointLightRef}
      />

      <RxModel innerRef={carRef} name2={"fc"} />

      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
        // position={[2.4, 4, 0]}
      >
        <Text
          fontSize={1}
          strokeColor={"black"}
          strokeWidth={"3.2%"}
          fillOpacity={0}
          strokeOpacity={0}
          ref={billRef}
          text={"Welcome"}
          // maxWidth={0.3}
        ></Text>
      </Billboard>

      {/* ------------- camera */}
      {/* --------------- seriously, add 'makeDefault' for camera
        https://github.com/pmndrs/drei#perspectivecamera
        */}
      <OrbitControls
        makeDefault
        // autoRotate
        autoRotateSpeed={0}
        // maxPolarAngle={Math.PI / 1.8}
        maxDistance={15}
        minDistance={1}
        enablePan={false}
        ref={orbitControlRef}
      />

      {/* ----------- plane */}

      <mesh
        receiveShadow
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -2, 0]}
      >
        <planeBufferGeometry args={[100, 100, 1, 1]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </>
  );
};

export default RxScene;

//https://discourse.threejs.org/t/proper-way-to-extend-orbitcontrols-to-support-camera-roll/18862/2
// orbitControlRef.current.object.up ( controls orbitcontrol perspective cam rotation )
