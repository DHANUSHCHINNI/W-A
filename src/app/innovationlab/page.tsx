import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './innovation.module.css';
import { innovationTextsection1, innovationTextsection1b, innovationTextsection2, innovationTextsection3 } from './innovationText';
import Carousel from '../components/Carousel';
import PB1 from '../assets/PB1.jpg';
import PB2 from '../assets/PB2.jpg';
import PB4 from '../assets/PB4.jpg';
import PB6 from '../assets/PB6.jpg';
import TMC1 from '../assets/TMC1.jpg';
import TMC2 from '../assets/TMC2.jpg';
import TMC4 from '../assets/TMC4.jpg';
import TMC5 from '../assets/TMC5.jpg';
import carousel2Styles from '../components/Carousel2.module.css';
import mirrorImg from '../assets/mirror.jpg';

const pbImages = [PB1, PB2, PB4, PB6];
const tmcImages = [TMC1, TMC2, TMC4, TMC5];

export default function InnovationLabPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.heroBgSection}>
                <Image
                    src={mirrorImg}
                    alt="Mirror background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 80%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>Innovation Lab</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading} style={{ display: 'none' }}>Innovation Lab</h1>
                <div className={styles.textSection}>
                    {innovationTextsection1}
                    {innovationTextsection1b}
                </div>
                <Carousel images={pbImages} altPrefix="Project Bhava" />
                <div className={styles.textSection}>
                    {innovationTextsection2}
                </div>
                <Carousel images={tmcImages} altPrefix="Therapeutic Movement Classes" styles={carousel2Styles} />
                <div className={styles.textSection}>
                    {innovationTextsection3}
                </div>
            </div>
        </div>
    );
} 