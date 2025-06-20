import React from 'react';
import Navbar from '../components/navbar';
import styles from './therapy.module.css';
import { therapyTextsection1 } from './therapyText';

export default function TherapyHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Therapy Hub</h1>
                <div className={styles.textSection}>
                    {therapyTextsection1}
                </div>
            </div>
        </div>
    );
} 