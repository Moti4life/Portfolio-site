import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../../styles/work.module.scss";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import {
  // Heading,
  Text,
  useColorModeValue,
  Badge,
  Flex,
  Box,
} from "@chakra-ui/react";

import FallbackWorkItem from "../../components/FallbackWorkItem";
import Layout from "../../components/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENTDELIVERY,
});

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "studies",
  });

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

//contentful slug should be unique to fetch only 1 result
export const getStaticProps = async ({ params }) => {
  //returns array
  const contentRes = await client.getEntries({
    content_type: "studies",
    "fields.slug": params.slug,
  });

  // console.log("content: ", contentRes.items.length);
  if (!contentRes.items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
    //set permanent to false
    //https://nextjs.org/docs/api-reference/next.config.js/redirects
  }

  //setting this will result to errors if contentRes is undefined
  const workItem = contentRes.items[0];

  return {
    props: {
      workItem,
    },
    revalidate: 10,
  };
  //----for revalidate
  //https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
};

const work = ({ workItem }) => {
  if (!workItem) return <FallbackWorkItem />;

  const {
    title,
    slogan,
    year,
    banner,
    description,
    libraries,
    detailsHeader,
    details,
    link,
    colorbg,
    detailsBanner,
    images,
  } = workItem.fields;
  // console.log('type: ', typeof(colorbg),' colorbg: ', colorbg );
  let introBgColor = useColorModeValue("", "");
  if (colorbg !== undefined) {
    introBgColor = useColorModeValue(
      colorbg[0] ? colorbg[0] : "",
      colorbg[1] ? colorbg[1] : ""
    );
  }
  const textColor = useColorModeValue("rgb(32, 37, 39)", "rgb(223, 218, 216)");

  // console.log("workFields: ", workFields);
  // console.log("images: ", images, typeof(images));

  gsap.registerPlugin(ScrollTrigger);
  // https://greensock.com/forums/topic/24286-scrolltrigger-and-webpack-prod-build/?do=findComment&comment=115701
  gsap.core.globals("ScrollTrigger", ScrollTrigger);

  useEffect(() => {
    let panelGroup = gsap.utils.toArray(".revealPanelAnim");
    let imageGroup = gsap.utils.toArray(".workGalleryImage");

    panelGroup.forEach((panel) => {
      gsap.fromTo(
        panel,
        { y: "100%", opacity: 0 },
        {
          y: "0%",

          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            // markers: true,
            start: "-50% 90%",
            end: "100% 20%",
            toggleActions: "play pause resume reverse",
          },
          duration: 0.5,
        }
      );
    });

    gsap.fromTo(
      ".workIntroPanel",
      { opacity: 1, y: "-100%" },
      {
        opacity: 1,
        y: "0%",
        duration: 0.3,
        stagger: {
          // each: .2,
          amount: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".libraryBadgeAnim",
      { opacity: 0, y: "100%", x: "30%" },
      {
        opacity: 1,
        y: "0%",
        x: "0%",
        stagger: {
          each: 0.2,
          from: "random",
        },
        scrollTrigger: {
          trigger: ".libraryBadgeAnim",
          // markers: true,
          start: "10% 80%",
          end: "100% 0%",
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.to(
      ".workGalleryBanner",
      {
        clipPath: "circle(80% at 50% 50%)",
        scrollTrigger: {
          trigger: ".workGalleryBanner",
          // markers: true,
          scrub: 1,
          start: "50% 80%",
          end: "50% 55%",
        },
      }
    );

    imageGroup.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: image,
            // markers: true,
            toggleActions: "play none none reverse",
            start: "-40% 100%",
          },
          stagger: {
            each: 0.2,
          },
        }
      );
    });
  }, []);

  // https://www.npmjs.com/package/@contentful/rich-text-react-renderer
  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <Box className={`${styles.introBox}`} backgroundColor={introBgColor}>
        <div className={`${styles.overflowHidden} ${styles.heroTitle}`}>
          <h1 className={`workIntroPanel`}>{title}</h1>
        </div>
        <div className={`${styles.overflowHidden}`}>
          <h3 className={`workIntroPanel`}>{slogan}</h3>
        </div>
      </Box>

      <div className={`${styles.workContainer}`}>
        <div className={styles.workInfo}>
          <Badge
            variant="outline"
            width={"min-content"}
            className={`revealPanelAnim`}
            color={textColor}
          >
            {year}
          </Badge>

          <Text className={`revealPanelAnim`}>{description}</Text>

          <Flex flexDirection="column" gap=".5rem">
            <Text className={`libraryBadgeAnim`}>Framework / libraries:</Text>
            {libraries.map((library, index) => {
              return (
                <div key={index}>
                  <Badge
                    variant="solid"
                    textTransform={"capitalize"}
                    letterSpacing={".1rem"}
                    fontFamily={"Saira Semi Condensed, sans-serif"}
                    className={`libraryBadgeAnim`}
                    backgroundColor={introBgColor}
                    color={textColor}
                  >
                    {library}
                  </Badge>
                </div>
              );
            })}
          </Flex>

          <div className={`revealPanelAnim ${styles.projectLink}`}>
            <a href={link} target={"_blank"} rel="noopener noreferrer">
              View it live &nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>

        <div className={`${styles.overflowHidden} ${styles.workDetails}`}>
          <h2>{detailsHeader}</h2>
          <div className={styles.workDetailsRich}>
            {documentToReactComponents(details, options)}
          </div>
        </div>
      </div>

      <div className={styles.workGalleryContainer}>
        {detailsBanner ? (
          <div className={` ${styles.workGalleryBannerContainer}`}>
            <div className={`workGalleryBanner ${styles.workGalleryBanner}`}>
              <Image
                src={`https:${detailsBanner.fields.file.url}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ) : (
          <>
            <br />
            <br />
            <br />
          </>
        )}

        {images ? (
          <div className={styles.workGalleryImages}>
            {images.map((image, index) => {
              // console.log("image: ", image);
              return (
                <div
                  className={`workGalleryImage ${styles.workGalleryImage}`}
                  key={index}
                >
                  <Image
                    src={`https:${image.fields.file.url}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <br />
            <br />
            <br />
          </>
        )}
      </div>
    </Layout>
  );
};

export default work;
