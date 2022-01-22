import type { NextPage } from 'next';
import Head from 'next/head';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import SocialMedia from '../components/SocialMedia';
import WavingHand from '../components/WavingHand';

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
            <main>

            </main>
            <footer></footer>
        </>
    );
}

export default Home;
