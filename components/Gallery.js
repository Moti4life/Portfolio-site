import styles from '../styles/Gallery.module.css'
// import { useState } from 'react'
import Image from "next/image";
import { useColorModeValue, Box } from '@chakra-ui/react';

const GalleryItem = ({ work, updateWorkCounter }) => {

    

    return(
        <div  className={`galleryItemPanel ${styles.galleryItemContainer}`}>
            
            <div></div>
            
            <div className={styles.galleryItem}>

                <div className={styles.galleryItemInfo}>
                    <h2>{work.title}</h2>
                    <p>{work.details}</p>
                </div>

                <div className={styles.galleryItemImageContainer}>
                    <Image src={work.images[0]} layout='fill' objectFit='contain' /* width='1000px' height='1000px' */  />
                </div>

                <div className={styles.phoneFloat}>
                    <div className={styles.galleryItemMobileImageContainer}>
                        <Image src={work.mobileImages[1]} layout='fill' objectFit='contain' />
                    </div>
                </div>

            </div>

            <div></div>

            <div></div>
            
        </div>
    )
}



const Gallery = ({ workResults }) => {

    // const [activeWorkCount, setActiveWorkCount] = useState(1)

    // const handleCounterUpdate = (index) => {
    //     setActiveWorkCount(index + 1)
    // }

    const colorModeBgGallery = useColorModeValue("orange", "red.800")

    return (
        <Box backgroundColor={colorModeBgGallery} className={`galleryContainer ${styles.galleryContainer}`}>

            {/* <div className={`${styles.galleryCounter}`}>
                
                <span>{activeWorkCount}</span>
                <span className={styles.divider}> / </span>
                <span>{workResults.length}</span>
            </div> */}

            {workResults.map( (work, index) => {
                return(
                    <GalleryItem 
                        key={work.title} 
                        work={work} 
                        index={index}
                        // updateWorkCounter={handleCounterUpdate}
                    />
                )
            })}

        </Box>
    );
}

export default Gallery;

