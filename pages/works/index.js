import { createClient } from "contentful";

import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Workpage.module.css";

import {
  SimpleGrid,
  Image,
  Heading,
  Badge,
  Box,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

// import Layout from "../../components/Layout";
import { motion } from "framer-motion";

const index = ({ workItems }) => {
  const linkColors = useColorModeValue("orange.600", "lime.600");

  // console.log('workItems: ', workItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Works</title>
      </Head>
      <div className={styles.workContainer}>
        <Breadcrumb
          className={styles.breadCrumb}
          spacing="8px"
          separator={<ChevronRightIcon />}
        >
          <BreadcrumbItem>
            <Link scroll={false} href="/">
              <Text decoration="underline" cursor="pointer" color={linkColors}>
                Home
              </Text>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Works</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading>My Work</Heading>

        <div className={styles.workList}>
          {workItems.map((workItem) => {
            // console.log('workItem: ', workItem);
            const { title, workbg, description, slug } = workItem.fields;

            return (
              <Link scroll={false} key={title} href={`/works/${slug}`}>
                <div className={styles.workCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={`https:${workbg.fields.file.url}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.workInfo}>
                    <h1>{title}</h1>
                    <span>{description}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default index;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENTDELIVERY,
  });

  const worksRes = await client.getEntries({
    content_type: "studies",
  });

  const workItems = worksRes.items;

  return {
    props: {
      workItems,
    },
    revalidate: 10,
  };
};
