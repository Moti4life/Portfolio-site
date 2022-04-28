import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../../styles/work.module.scss";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import Link from "next/link";
import Head from "next/head";

import {
  Heading,
  Text,
  useColorModeValue,
  Badge,
  Flex,
  Box,
} from "@chakra-ui/react";

import FallbackWorkItem from "../../components/FallbackWorkItem";
import Layout from "../../components/Layout";

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
    description,
    libraries,
    details,
    link,
    colorbg,
  } = workItem.fields;
  // console.log('type: ', typeof(colorbg),' colorbg: ', colorbg );
  let introBgColor = useColorModeValue("", "");
  if (colorbg !== undefined) {
    introBgColor = useColorModeValue(
      colorbg[0] ? colorbg[0] : "",
      colorbg[1] ? colorbg[1] : ""
    );
  }

  // console.log("workFields: ", workFields);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let panelGroup = gsap.utils.toArray(".revealPanelAnim");

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
            start: "0% 83%",
            end: "100% 30%",
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
          amount: 0.3
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
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <Box className={styles.introBox} backgroundColor={introBgColor}>
        <div className={`${styles.overflowHidden} ${styles.heroTitle}`}>
          <h1 className={`workIntroPanel`}>{title}</h1>
        </div>
        <div className={`${styles.overflowHidden}`}>
          <h3 className={`workIntroPanel`}>{slogan}</h3>
        </div>
      </Box>

      <div className={styles.workContainer}>
        <div className={styles.workInfo}>
          <Badge
            variant="outline"
            width={"min-content"}
            className={`revealPanelAnim`}
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
                  >
                    {library}
                  </Badge>
                </div>
              );
            })}
          </Flex>
        </div>

        <div className={`${styles.overflowHidden} ${styles.workDetails}`}>
          <div /* className={`revealPanelAnim`} */>
            {documentToReactComponents(details)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default work;

// bread crumb

// import { Link as ChakraLink }  from "@chakra-ui/react"
// import { ChevronRightIcon } from "@chakra-ui/icons";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
// } from "@chakra-ui/react";

/* <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon />}
          className={styles.breadCrumb}
        >
          <BreadcrumbItem>
            <Link scroll={false} href="/">
              <Text decoration="underline" cursor="pointer" color={linkColors}>
                Home
              </Text>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link scroll={false} href="/works">
              <Text decoration="underline" cursor="pointer" color={linkColors}>
                Works
              </Text>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{workFields.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb> */

// const textAnim = {
//   offScreen: {
//     opacity: 0,
//     y: 100,
//     rotateX: "45deg",
//     skew: "10deg, 10deg",
//   },
//   onScreen: {
//     opacity: 1,
//     y: 0,
//     skew: "0deg",
//     rotateX: "0deg",
//     transition: { duration: .5 },
//   },
//   viewport: {
//     once: true,
//     amount: 0.1,
//   },

/*   variants={textAnim}
          initial={textAnim.offScreen}
          whileInView={textAnim.onScreen}
          viewport={textAnim.viewport}
           */

// };
