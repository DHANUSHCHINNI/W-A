'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Image from 'next/image';
import styles from './rnd.module.css';
import anchorImg from '../assets/anchor.jpg';
import { rndTextsection1, rndTextsection2 } from './rndText';
import LogoCarousel from '../components/LogoCarousel';
import Footer from "../components/Footer";
import Carousel2Styles from '../components/Carousel2.module.css';
import Carousel from '../components/Carousel';

const rndImages = [
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671342/ppt3_deep9j.png',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671343/ppt1_yobzgj.png',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671343/ppt2_jsop6z.png',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671342/ppt5_cdtcpn.png',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671342/ppt4_c6vrsu.png',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754671753/R_DHub1_lija81.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1754932196/ppt6_flpkua.png'
];

export default function RnDPage() {
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
            {/* Header image section */}
            <div className={styles.heroBgSection}>
                <Image
                    src={anchorImg}
                    alt="Anchor background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center 70%'
                    priority
                    className={styles.heroBgImage}
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.rndHeading}>Research &amp; Development Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <h1 className={styles.rndHeading} style={{ display: 'none' }}>R&amp;D Hub</h1>
                <div className={styles.textSection}>
                    {rndTextsection1}
                    {rndTextsection2}
                </div>
                <div style={{ marginBottom: '2.5rem' }}>
                    <Carousel images={rndImages} altPrefix="RnD Hub presentations" styles={Carousel2Styles} />
                </div>
            </div>
            <LogoCarousel />
            < Footer />
        </div>
    );
} 