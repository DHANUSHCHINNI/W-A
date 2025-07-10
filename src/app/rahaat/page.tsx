import React from 'react';
import Navbar from '../components/navbar';
import styles from './rahaat.module.css';
import { rahaatTextSection1 } from './rahaatText';

export default function RahaatPage() {
    return (
        <div className={styles.rndBackground}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/moon.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.rndHeading}>Rahaat</h1>
                    <div className={styles.textSection}>
                        {rahaatTextSection1}
                    </div>
                </div>
            </div>
        </div>
    );
} 