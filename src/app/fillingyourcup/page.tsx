import React from 'react';
import Navbar from '../components/navbar';
import styles from './fillingyourcup.module.css';
import { fillingyourcupTextsection1 } from './fillingyourcupText';

export default function FillingYourCupPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Filling Your Cup First</h1>
                <div className={styles.textSection}>
                    {fillingyourcupTextsection1}
                </div>
            </div>
        </div>
    );
} 