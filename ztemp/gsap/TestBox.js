import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TestBox = () => {
  gsap.registerPlugin(ScrollTrigger);
  // #gallerySection

  // pin: '#gallerySection',
  // pinnedContainer: '#gallerySection',
  useEffect(() => {



    // let testAnim = gsap.to(".boxTest", {
    //   x: "1000px",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#modelCanvasSection",
    //     scrub: true,
    //     markers: true,
    //     pin: true,
    //     // pin: '#mainContainer',
    //     end: "+=100%",
    //   },
    // });

    let tl = gsap.timeline();

    tl.to('.boxTest', { x: 500})
    .to('.boxTest', { y: 500})
    .to('.boxTest', { x: -50})
    .to('.boxTest', { y: -500})
    .to('.boxTest', { x: 500, y: 500})

    let controller = ScrollTrigger.create({
      animation: tl,
      trigger: "#gallerySectionSpacer",
      scrub: 0.2,
      // start: "0% 0%",
      start: "top top",
      end: "+=800%",
      markers: true,
      pin: true,
      // pin: "#mainContainer",
      // pin: '.modelCanvasContainer',
      // pinnedContainer: '#modelCanvasSection',
      ease: "none",
      // pinSpacing: true,
      // anticipatePin: 1,
      // refreshPriority: 0
    });


    return () => {
      // testAnim.kill();
      // .disable() not recognized?? not sure
    };
  });

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "grey" }}>
      Test Spacer
      <div
        className={`boxTest`}
        style={{
          transform: "translateX(100px)",
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default TestBox;
