import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './rnd.module.css';
import anchorImg from '../assets/anchor.jpg';
import RnDImage from '../assets/R&DHub1.jpg';
import { rndTextsection1, rndTextsection2 } from './rndText';

export default function RnDPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            {/* Header image section */}
            <div className={styles.heroBgSection}>
                <Image
                    src={anchorImg}
                    alt="Anchor background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 70%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>R&amp;D Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading} style={{ display: 'none' }}>R&amp;D Hub</h1>
                <div className={styles.textSection}>
                    {rndTextsection1}
                    {rndTextsection2}
                </div>
                <div className={styles.centerImage} style={{ marginTop: '2.5rem' }}>
                    <Image
                        src={RnDImage}
                        alt="R&D Hub"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
} 