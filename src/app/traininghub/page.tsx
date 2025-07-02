import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './training.module.css';
import { trainingTextsection1, trainingTextsection1b, trainingTextsection2 } from './trainingText';
import Carousel from '../components/Carousel';
import Carousel2Styles from '../components/Carousel2.module.css';
import TrainingHub1 from '../assets/TrainingHub1.jpg';
import TrainingHub2 from '../assets/TrainingHub2.jpg';
import TrainingHub3 from '../assets/TrainingHub3.jpg';
import TrainingHub4 from '../assets/TrainingHub4.jpg';
import TrainingHub5 from '../assets/TrainingHub5.jpg';
import TrainingOfferingsCards from './TrainingOfferingsCards';
import origamiImg from '../assets/origami.jpg';

const images = [TrainingHub5, TrainingHub1, TrainingHub2, TrainingHub3, TrainingHub4];

export default function TrainingHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.heroBgSection}>
                <Image
                    src={origamiImg}
                    alt="Origami background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 75%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>Training Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading} style={{ display: 'none' }}>Training Hub</h1>
                <div className={styles.textSection}>
                    {trainingTextsection1}
                </div>
                <Carousel images={images} altPrefix="Training Hub Image" styles={Carousel2Styles} />
                <div className={styles.textSection}>
                    {trainingTextsection1b}
                </div>
                <TrainingOfferingsCards />
                <div className={styles.textSection}>
                    {trainingTextsection2}
                </div>
            </div>
        </div>
    );
} 