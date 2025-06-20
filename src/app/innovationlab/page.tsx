import React from 'react';
import Navbar from '../components/navbar';
import styles from './innovation.module.css';
import { innovationTextsection1 } from './innovationText';

export default function InnovationLabPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Innovation Lab</h1>
                <div className={styles.textSection}>
                    {innovationTextsection1}
                </div>
            </div>
        </div>
    );
} 