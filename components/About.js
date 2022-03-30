import { Heading, Text } from "@chakra-ui/react";
import styles from '../styles/About.module.css'


const About = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.title}>
                <Heading size='xl'>Moti</Heading>
                <Text fontWeight='500' size='md' >Web developer / Automotive nut</Text>
            </div>

            <div>
                <Heading size='lg' marginBottom={".5rem"}>About Me</Heading>
                <Text align={"justify"}>Moti is a web developer with a passion for learning.
                    Also a car enthusiast; he likes to tinker and learn how to fix things.
                    <br/>
                    On days where he is not working; he spends his time surrounded by loved ones and things that he likes to do.
                            
                </Text>
            </div>

            <div>
                <Heading size='lg' marginBottom={".5rem"}>Right now</Heading>
                <Text align={"justify"}>
                    Learning Nextjs/React and improving css design skills;
                    having fun building these voxel models/ using blender for material effects; 
                    about to do some freelancing;
                    build recommendations for gaming system units
                </Text>
            </div>
        </div>
    );
}

export default About;