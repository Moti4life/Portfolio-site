import FooterSection from "../../components/FooterSection";
import styles from '../../styles/Workpage.module.css'
import Head from 'next/head'
import Link from 'next/link'

import { SimpleGrid, Image, Heading, Badge, Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

import worksModel from "../../models/worksModel";
import connectDB from "../../utils/db";

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

import { motion } from "framer-motion";

const works = ({ workResults }) => {
    const linkColors = useColorModeValue("orange.600", "teal.400")

    return (
        <motion.div 
        exit={{ opacity: 0}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}>

            <Head>
                <title>Moti works</title>
            </Head>
            <div className={styles.workContainer}>
                
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} >
                    <BreadcrumbItem>
                        <Link href='/'><Text decoration='underline' cursor='pointer' color={linkColors}>Home</Text></Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Works</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Heading>My Work</Heading>

                <SimpleGrid columns={1} spacing={6}>
                    {workResults.map( work => {
                        return(
                            <Link key={work.title} href={`/works/${work.title}`}>
                                <Box position='relative' className={styles.workCard} borderWidth='2px' height='300px' >
                                    <div className={styles.imageContainer}>
                                        <Image  className={styles.image} src={work.thumb[0]} />
                                    </div>
                                    <Box className={styles.workInfo}>
                                        <h1>{work.title}</h1>
                                        <span>{work.details}</span>
                                    </Box>
                                </Box>
                            </Link>
                        )
                    })}
                </SimpleGrid>

            </div>

            <FooterSection />
        </motion.div>
    );
}

export default works;


export const getStaticProps = async () => {
    await connectDB()

    const res = await worksModel.find({})

    const workResults = JSON.parse(JSON.stringify(res))

    // console.log('====================================');
    // console.log('workResults: ', workResults, typeof(workResults));
    // console.log('====================================');

    return{
        props:{
          workResults
        }
      }
}