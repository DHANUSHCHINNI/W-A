'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Image from 'next/image';
import styles from './rnd.module.css';
import anchorImg from '../assets/anchor.jpg';
import RnDImage from '../assets/R&DHub1.jpg';
import { rndTextsection1, rndTextsection2 } from './rndText';
import LogoCarousel from '../components/LogoCarousel';
import Footer from "../components/Footer";

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
                <div className={styles.centerImage} style={{ marginTop: '2.5rem' }}>
                    <Image
                        src={RnDImage}
                        alt="R&D Hub"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>
            <LogoCarousel />
            < Footer />
        </div>
    );
} 