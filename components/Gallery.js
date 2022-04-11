import styles from '../styles/Gallery.module.css'
// import { useState } from 'react'
import Image from "next/image";
import Link from 'next/link'
import { Box } from '@chakra-ui/react';

import CustomLink2 from './CustomLink2';

const GalleryItem = ({ study }) => {
    
    const { title, slug, description, banner, mobile} = study.fields
    
    // console.log(slug);

    return(
        <div  className={`galleryItemPanel ${styles.galleryItemContainer}`}>
            
            <div></div>
            
            <div className={styles.galleryItem}>

                <Link scroll={false} href={`/works/${slug}`}>
                    <div className={styles.galleryItemInfo}>
                        <CustomLink2 title={title} link={`/works/${slug}`} />
                        <p>{description}</p>
                    </div>
                </Link>

                <div className={styles.galleryItemImageContainer}>
                    <Image src={`https:${banner.fields.file.url}`} layout='fill' objectFit='contain'  />
                </div>

                <div className={styles.phoneFloat}>
                    <div className={styles.galleryItemMobileImageContainer}>
                        <Image src={`https:${mobile.fields.file.url}`} layout='fill' objectFit='contain' />
                    </div>
                </div>

            </div>

            <div></div>

            <div></div>
            
        </div>
    )
}



const Gallery = ({ studies }) => {

    // const [activeWorkCount, setActiveWorkCount] = useState(1)

    // const handleCounterUpdate = (index) => {
    //     setActiveWorkCount(index + 1)
    // }

    // console.log('studies: ', studies);

    return (
        <Box /* backgroundColor={colorModeBgGallery} */ className={`galleryContainer ${styles.galleryContainer}`}>

            {/* <div className={`${styles.galleryCounter}`}>
                
                <span>{activeWorkCount}</span>
                <span className={styles.divider}> / </span>
                <span>{workResults.length}</span>
            </div> */}

            {studies.map( (study, index) => {
                return(
                    <GalleryItem 
                        key={study.fields.title} 
                        // work={work} 
                        study={study}
                        index={index}
                        // updateWorkCounter={handleCounterUpdate}
                    />
                )
            })}

        </Box>
    );
}

export default Gallery;

