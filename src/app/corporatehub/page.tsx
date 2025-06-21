import React from 'react';
import Navbar from '../components/navbar';
import styles from './corporate.module.css';
import { corporateTextsection1 } from './corporateText';
import Carousel from '../components/Carousel';

export default function CorporateHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Corporate Hub</h1>
                <Carousel />
                <div className={styles.textSection}>
                    {corporateTextsection1}
                </div>
            </div>
        </div>
    );
} 