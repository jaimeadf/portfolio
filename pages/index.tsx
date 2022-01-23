import type { NextPage } from 'next';
import Head from 'next/head';
import classNames from 'classnames';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiJava } from 'react-icons/si';
import { FaHeart } from 'react-icons/fa';

import SocialMedia from '../components/SocialMedia';
import WavingHand from '../components/WavingHand';

import TopWave from '../assets/curves/top-wave.svg'
import BottomWave from '../assets/curves/bottom-wave.svg';
import CSharp from '../assets/technologies/csharp.svg';
import C from '../assets/technologies/c.svg';

import styles from '../styles/Home.module.scss';
import ProgressBar from '../components/ProgressBar';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
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
                <TopWave className={classNames(styles.wave, styles.aboutMeWave)} />
                <section className={classNames(styles.section, styles.aboutMe)}>
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
                <BottomWave className={classNames(styles.wave, styles.aboutMeWave)} />

                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>My Skills</h2>
                        <div className={styles.skills}>
                            <div className={styles.skill}>
                                <SiHtml5 className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <SiCss3 className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <SiJavascript className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <SiReact className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <SiTypescript className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <SiJava className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <CSharp className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                            <div className={styles.skill}>
                                <C className={styles.technology} />
                                <ProgressBar className={styles.proficiency} value={50} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <TopWave className={classNames(styles.wave, styles.footerWave)} />
            <footer className={styles.footer}>
                <p className={styles.madeWith}>
                    Made with &#123;
                    <SiHtml5 className={styles.icon} />,
                    <SiCss3 className={styles.icon} />,
                    <SiReact className={styles.icon} />,
                    <FaHeart className={styles.icon} />
                    &#125;
                </p>
                <p>&copy; 2022 Jaime Filho. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
