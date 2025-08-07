'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Image from 'next/image';
import styles from './training.module.css';
import { trainingTextsection1, trainingTextsection1b, trainingTextsection2 } from './trainingText';
import Carousel from '../components/Carousel';
import Carousel2Styles from '../components/Carousel2.module.css';
import TrainingOfferingsCards from './TrainingOfferingsCards';
import origamiImg from '../assets/origami.jpg';
import Footer from "../components/Footer";


const images = [
    'https://res.cloudinary.com/djspsll41/image/upload/v1752138230/traininghub5.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752136643/traininghub1.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752136644/traininghub2.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752136645/traininghub3.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752138023/traininghub4.jpg',
];

export default function TrainingHubPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={styles.rndBackground}>
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}
            <div className={styles.heroBgSection}>
                <Image
                    src={origamiImg}
                    alt="Origami background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 75%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>Training Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading} style={{ display: 'none' }}>Training Hub</h1>
                <div className={styles.textSection}>
                    {trainingTextsection1}
                </div>
                <Carousel images={images} altPrefix="Training Hub Image" styles={Carousel2Styles} />
                <div className={styles.textSection}>
                    {trainingTextsection1b}
                </div>
                <TrainingOfferingsCards />
                <div className={styles.textSection}>
                    {trainingTextsection2}
                </div>
            </div>
            <Footer />
        </div>
    );
} 