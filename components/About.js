import styles from '../styles/About.module.scss'

const About = () => {

    return (
        <div className={styles.aboutContainer}>

            <div className={styles.title}>
                <h1>Moti</h1>
                <h3>Web developer / Automotive nut</h3>
            </div>

            <div>
                <h2>About Me</h2>
                <p>I'm a web developer with a passion for learning 
                    Also a car enthusiast; he likes to tinker and learn how to fix things.
                    <br/>
                    On days where he is not working; he spends his time surrounded by loved ones and things that he likes to do.
                            
                </p>
            </div>

            <div>
                <h2>Right now</h2>
                <p>
                    Practicing Nextjs/React and improving css design skills; Learning lots from youtube, from creators who focus on design / UI and UX / motion and animation; to those whose craft is the backend.
                    <br />Having fun building these voxel models / using blender for material effects; 
                    build recommendations for gaming system units.
                    Everyday finding a little bit of myself.
                </p>
            </div>

            <div>
                <h2>Credits</h2>
                <p>
                    This part is to give credit to the creators / youtubers / teachers who made all of those reseach materials / videos / instructions around the net. 
                    Thank you very much for making the internet better and easier.
                </p>
            </div>
        </div>
    );
}

export default About;