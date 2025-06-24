import React from 'react';
import Navbar from '../components/navbar';
import styles from './corporate.module.css';
import { corporateTextsection1 } from './corporateText';
import Carousel from '../components/Carousel';
import corporatehub1 from '../assets/corporatehub1.jpg';
import corporatehub2 from '../assets/corporatehub2.jpg';
import corporatehub3 from '../assets/corporatehub3.jpg';

const images = [corporatehub1, corporatehub2, corporatehub3];

export default function CorporateHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading}>Corporate Hub</h1>
                <Carousel images={images} altPrefix="Corporate Hub Image" />
                <div className={styles.textSection}>
                    {corporateTextsection1}
                </div>
            </div>
        </div>
    );
} 