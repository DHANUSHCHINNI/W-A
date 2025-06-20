import React from 'react';
import Navbar from '../components/navbar';
import styles from './rnd.module.css';
import { rndTextsection1 } from './rndText';

export default function RnDPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>R&D Hub</h1>
                <div className={styles.textSection}>
                    {rndTextsection1}
                </div>
            </div>
        </div>
    );
} 