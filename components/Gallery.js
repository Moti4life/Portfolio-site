import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

import CustomLink2 from "./CustomLink2";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GalleryItem = ({ study }) => {
  const { title, slug, description, banner, mobile } = study.fields;

  // console.log(slug);

  return (
    <div className={`galleryItemPanel ${styles.galleryItemContainer}`}>
      <div></div>

      <div className={styles.galleryItem}>
        <Link scroll={false} href={`/works/${slug}`}>
          <div className={styles.galleryItemInfo}>
            <CustomLink2 title={title} link={`/works/${slug}`} />
            <p>{description}</p>
          </div>
        </Link>

        <Link scroll={false} href={`/works/${slug}`}>
          <div className={styles.galleryItemImageContainer}>
            <Image
              src={`https:${banner.fields.file.url}`}
              layout="fill"
              objectFit="contain"
              className={styles.galleryItemImage}
            />
          </div>
        </Link>

        <Link scroll={false} href={`/works/${slug}`}>
          <div className={styles.phoneFloat}>
            <div className={styles.galleryItemMobileImageContainer}>
              <Image
                src={`https:${mobile.fields.file.url}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </Link>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};

const Gallery = ({ studies }) => {
  // const [activeWorkCount, setActiveWorkCount] = useState(1)

  // const handleCounterUpdate = (index) => {
  //     setActiveWorkCount(index + 1)
  // }

  // console.log('studies: ', studies);
  gsap.registerPlugin(ScrollTrigger);

  // https://greensock.com/forums/topic/24286-scrolltrigger-and-webpack-prod-build/?do=findComment&comment=115701
  gsap.core.globals("ScrollTrigger", ScrollTrigger);

  useEffect(() => {
    let galleryPanels = gsap.utils.toArray(".galleryItemPanel");

    let galleryAnimation = gsap.to(galleryPanels, {
      xPercent: -100 * (galleryPanels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#gallerySection",
        // pinnedContainer: '#modelCanvasSection',
        pin: true,
        // markers: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (galleryPanels.length - 1),
          inertia: false,
          duration: 2,
        },
        start: "10% 15%",
        end: "+=200%",
      },
    });

    // make sure to that ScrollTriggers are killed on page/route change
    // https://greensock.com/forums/topic/25893-scrolltrigger-issue-with-react/?do=findComment&comment=125755

    // gsap pinSpacer
    // https://vimeo.com/439964874
    return () => {
      galleryAnimation.kill();
      // .disable() not recognized?? not sure
    };
  }, []);

  return (
    <Box
      /* backgroundColor={colorModeBgGallery} */ className={`galleryContainer ${styles.galleryContainer}`}
    >
      {/* <div className={`${styles.galleryCounter}`}>
                
                <span>{activeWorkCount}</span>
                <span className={styles.divider}> / </span>
                <span>{workResults.length}</span>
            </div> */}

      {studies.map((study, index) => {
        return (
          <GalleryItem
            key={study.fields.title}
            // work={work}
            study={study}
            index={index}
            // updateWorkCounter={handleCounterUpdate}
          />
        );
      })}
    </Box>
  );
};

export default Gallery;
