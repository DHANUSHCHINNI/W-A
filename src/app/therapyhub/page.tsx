import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './therapy.module.css';
import { therapyTextsection1 } from './therapyText';
import TherapyHub1 from '../assets/TherapyHub1.jpg';

export default function TherapyHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Therapy Hub</h1>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageSection}>
                        <Image
                            src={TherapyHub1}
                            alt="Therapy Hub"
                            width={400}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textSection}>
                        {therapyTextsection1}
                    </div>
                </div>
            </div>
        </div>
    );
} 