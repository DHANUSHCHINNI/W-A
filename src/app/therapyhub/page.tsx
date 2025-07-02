import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './therapy.module.css';
import { therapyTextsection1, therapyTextsection1b, therapyTextsection2 } from './therapyText';
import couchBg from '../assets/couch.avif';
import PlanCards from './PlanCards';

export default function TherapyHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            {/* Background image section */}
            <div className={styles.heroBgSection}>
                <Image
                    src={couchBg}
                    alt="Couch background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 80%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>Therapy Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    {/* First line in Erstoria, following para in PT Serif */}
                    <div>
                        {therapyTextsection1}
                        {therapyTextsection1b}
                    </div>
                    <PlanCards />
                </div>
            </div>
        </div>
    );
} 