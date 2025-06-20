import React from 'react';
import Navbar from '../components/navbar';
import styles from './training.module.css';
import { trainingTextsection1 } from './trainingText';

export default function TrainingHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Training Hub</h1>
                <div className={styles.textSection}>
                    {trainingTextsection1}
                </div>
            </div>
        </div>
    );
} 