import React from 'react';
import Navbar from '../../components/navbar';
import styles from './fillingyourcup.module.css';
import { fillingyourcupTextsection1 } from './fillingyourcupText';



export default function FillingYourCupPage() {
    return (
        <div className={styles.rndBackground}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/coffee.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.rndHeading}>Filling your Cup</h1>
                    <div className={styles.textSection}>
                        {fillingyourcupTextsection1}
                    </div>
                </div>
            </div>
        </div>
    );
} 