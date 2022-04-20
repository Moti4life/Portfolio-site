import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from '../../styles/work.module.css'

import Link from 'next/link'
import Head from "next/head";

import { Heading, Text, useColorModeValue, Badge, Flex } from '@chakra-ui/react'
// import { Link as ChakraLink }  from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

import FallbackWorkItem from "../../components/FallbackWorkItem";
import Layout from '../../components/Layout'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENTDELIVERY,
});

export const getStaticPaths = async () => {
    const response = await client.getEntries({ 
        content_type: "studies" 
    })

    const paths = response.items.map( item => {
        return{
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }

    

}

//contentful slug should be unique to fetch only 1 result
export const getStaticProps = async ({ params }) => {
    
    //returns array
    const contentRes = await client.getEntries({
        content_type: "studies",
        'fields.slug': params.slug
    })

    console.log('content: ', contentRes.items.length);
    if(!contentRes.items.length){
        return{
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
        //set permanent to false
        //https://nextjs.org/docs/api-reference/next.config.js/redirects
    }

    //setting this will result to errors if contentRes is undefined
    const workItem = contentRes.items[0]


    return{
        props: {
            workItem
        },
        revalidate: 10
    }
    //----for revalidate
    //https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
}


const work = ({ workItem }) => {

    if(!workItem) return(
        <FallbackWorkItem />
    )

    const linkColors = useColorModeValue("orange.600", "teal.400")
    
    const workFields = workItem.fields

    // console.log("workFields: ", workFields);
    
    return (
        <Layout>
            <Head>
                <title>{workFields.title}</title>
            </Head>
            <div className={styles.workContainer}>
            
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} >
                    <BreadcrumbItem>
                        <Link scroll={false} href='/'><Text decoration='underline' cursor='pointer' color={linkColors}>Home</Text></Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link scroll={false} href='/works'><Text decoration='underline' cursor='pointer' color={linkColors}>Works</Text></Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>{workFields.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex alignItems='baseline' gap='1rem'>
                    <Heading size='lg'>{workFields.title}</Heading>
                    <Badge variant='outline'>{workFields.year}</Badge>
                </Flex>
                <Text>{workFields.description}</Text>
                <Flex flexDirection='column' gap='.5rem' >
                    <Text>Framework / libraries:</Text>
                        {workFields.libraries.map( (library, index) => {
                        return(
                            <div key={index}>
                                <Badge variant='solid' textTransform={'capitalize'} letterSpacing={'.1rem'} fontFamily={'Saira Semi Condensed, sans-serif'}>{library}</Badge>
                            </div>
                        )
                    })}
                </Flex>
                <div>
                    <Text>{documentToReactComponents(workFields.details)}</Text>
                </div>
            </div>
        </Layout>
    );
}

export default work;