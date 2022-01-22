import type { NextPage } from 'next';
import Head from 'next/head';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import SocialMedia from '../components/SocialMedia';
import WavingHand from '../components/WavingHand';

import TopWave from '../assets/curves/top-wave.svg'
import BottomWave from '../assets/curves/bottom-wave.svg';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hello</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.greeting}>
                    <p>Hi, my name is</p>
                    <h1>Jaime Filho</h1>
                    <div className={styles.socialMedias}>
                        <SocialMedia url={"https://github.com/jaimeadf"} icon={<FiGithub size={32} />} />
                        <SocialMedia url={"https://github.com/jaimeadf"} icon={<FiLinkedin size={32} />} />
                    </div>
                </div>
                <WavingHand className={styles.hand}/>
            </header>
            <main className={styles.main}>
                <TopWave className={styles.aboutMeWave} />
                <section className={`${styles.section} ${styles.aboutMe}`}>
                    <div className={styles.content}>
                        <h2>About Me</h2>
                        <p>
                            Since I was a little child, I’ve been passionate about technology. This passion, alongside
                            my eagerness to understand how things work, has fueled me to learn all sorts of topics and
                            allowed me to meet amazing people along the way. Currently, I’m an unemployed high-school
                            student who develops full-stack applications, but I’m always open to new challenges and
                            opportunities. I like to craft beautiful yet fast and solid solutions focused on
                            maintainability and extensibility. To become a software engineer, I am always trying to
                            improve myself and help others through studies and experiences.
                        </p>
                    </div>
                </section>
                <BottomWave className={styles.aboutMeWave} />
            </main>
            <footer></footer>
        </>
    );
}

export default Home;
