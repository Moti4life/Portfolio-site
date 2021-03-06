import styles from '../styles/Cursor.module.css'
// import Image from 'next/image';
// import gsap from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react'

const Cursor = () => {

    const mainCursor = useRef(null)
    const secondaryCursor = useRef(null)
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    })

    useEffect( () => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event

            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;

            mainCursor.current.style.transform = `translate3d(${mouseX -
                mainCursor.current.clientWidth / 2}px, ${mouseY -
                mainCursor.current.clientHeight / 2}px, 0)`;
        })

        return () => {};
    }, [])


    useEffect(() => {
        const followMouse = () => {
          positionRef.current.key = requestAnimationFrame(followMouse);
          const {
            mouseX,
            mouseY,
            destinationX,
            destinationY,
            distanceX,
            distanceY,
          } = positionRef.current;
          if (!destinationX || !destinationY) {
            positionRef.current.destinationX = mouseX;
            positionRef.current.destinationY = mouseY;
          } else {
            positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
            positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
            if (
              Math.abs(positionRef.current.distanceX) +
                Math.abs(positionRef.current.distanceY) <
              0.1
            ) {
              positionRef.current.destinationX = mouseX;
              positionRef.current.destinationY = mouseY;
            } else {
              positionRef.current.destinationX += distanceX;
              positionRef.current.destinationY += distanceY;
            }
          }
          secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        followMouse();
    }, []);

    return (
        <div className={styles.cursorContainer}>
            <div className={`mainCursor ${styles.mainCursor}`} ref={mainCursor}>
                <div className={styles.mainCursorBg}></div>
            </div>

            <div className={`secondaryCursor ${styles.secondaryCursor}`} ref={secondaryCursor}>
                <div className={styles.secondaryCursorBg}></div>
            </div>
        </div>
    );
}

export default Cursor;

//from https://github.com/nicubarbaros/custom-mouse-change

{/* <div className={styles.cursor}>
            <div className={styles.cursorMedia}>
                <div className={styles.imageContainer}>
                    <Image src="/images/testcar.JPG" layout='fill' />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/mango3.jpg" layout='fill' />
                </div>
            </div>
        </div> */}