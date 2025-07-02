import React from 'react';
import Navbar from '../components/navbar';
import styles from './wellbeingretreats.module.css';
import { wellbeingRetreatsTextSection1 } from './wellbeingretreatsText';

export default function WellbeingRetreatsPage() {
    return (
        <div className={styles.rndBackground}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/waterfall.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.rndHeading}>Well-being Retreats</h1>
                    <div className={styles.textSection}>
                        {wellbeingRetreatsTextSection1}
                    </div>
                </div>
            </div>
        </div>
    );
} 