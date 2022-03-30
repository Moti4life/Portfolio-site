import FooterSection from "../../components/FooterSection"
import connectDB from "../../utils/db"
import worksModel from "../../models/worksModel"

import styles from '../../styles/title.module.css'

import Link from 'next/link'

import { Heading, Text, useColorModeValue, Badge, Flex, Image } from '@chakra-ui/react'
import { Link as ChakraLink }  from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

import { motion } from "framer-motion"
  

export const getStaticPaths = async () => {
    await connectDB()

    const res = await worksModel.find({})

    const workResults = await JSON.parse(JSON.stringify(res))

    const paths = workResults.map( work => {
        return {
            params: { title: work.title.toString() }
        }
    })

    return{
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ( context ) => {
    await connectDB()

    // console.log('====================================');
    // console.log('context: ', context);
    // console.log(context.params.title);
    // console.log('====================================');

    const title = context.params.title

    const res = await worksModel.find({ title: { $regex : `${title}`, $options: 'i' } }).lean()
    const data = JSON.parse(JSON.stringify(res))

    return{
        props: {
            workPiece: data
        }
    }
}

const work = ({ workPiece }) => {
    const linkColors = useColorModeValue("orange.600", "teal.400")

    const work = workPiece[0]
    const imageArray = work.images
    const techArray = work.tech

    return(
        <>
            <motion.div 
            className={styles.workContainer}
            exit={{ opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}>

                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} >
                    <BreadcrumbItem>
                        <Link href='/'><Text decoration='underline' cursor='pointer' color={linkColors}>Home</Text></Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link href='/works'><Text decoration='underline' cursor='pointer' color={linkColors}>Works</Text></Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>{work.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Flex alignItems='baseline' gap='1rem'>
                    <Heading size='lg'>{work.title}</Heading>
                    <Badge variant='outline'>{work.year}</Badge>
                    {/* <Text>{work.details}</Text> */}
                </Flex>
                <Text>{work.description}</Text>
                <Flex flexDirection='column' gap='.5rem' >
                    <Text>Framework / libraries:</Text>
                        {techArray.map( (tech, index) => {
                                return(
                                    <div key={index}>
                                        <Badge variant='solid'>{tech}</Badge>
                                    </div>
                                )
                            })
                        }
                </Flex>

                
                <Text>Link: <ChakraLink target="_blank" isExternal color={linkColors} href={`${work.path}`}>{work.path}</ChakraLink></Text>
                <div>
                    {
                        imageArray.map( (imageLink, index) => {
                            return(
                                <div key={index}>
                                    <br />
                                    <Image src={imageLink} />
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
            <FooterSection />
        </>
    )
}

export default work