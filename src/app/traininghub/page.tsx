import React from 'react';
import Navbar from '../components/navbar';
import styles from './training.module.css';
import { trainingTextsection1 } from './trainingText';
import Carousel from '../components/Carousel';
import TrainingHub1 from '../assets/TrainingHub1.jpg';
import TrainingHub2 from '../assets/TrainingHub2.jpg';
import TrainingHub3 from '../assets/TrainingHub3.jpg';
import TrainingHub4 from '../assets/TrainingHub4.jpg';

const images = [TrainingHub1, TrainingHub2, TrainingHub3, TrainingHub4];

export default function TrainingHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Training Hub</h1>
                <Carousel images={images} altPrefix="Training Hub Image" />
                <div className={styles.textSection}>
                    {trainingTextsection1}
                </div>
            </div>
        </div>
    );
} 