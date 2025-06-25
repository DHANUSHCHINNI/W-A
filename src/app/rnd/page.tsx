import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './rnd.module.css';
import { rndTextsection1 } from './rndText';
import RnDImage from '../assets/R&DHub1.jpg';

export default function RnDPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>R&D Hub</h1>
                <div className={styles.centerImage}>
                    <Image
                        src={RnDImage}
                        alt="R&D Hub"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {rndTextsection1}
                </div>
            </div>
        </div>
    );
} 