'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import styles from './rahaat.module.css';
import { rahaatTextSection1 } from './rahaatText';
import Footer from "../components/Footer";


export default function RahaatPage() {
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
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/moon.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div>
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.rndHeading}>Rahaat</h1>
                    <div className={styles.textSection}>
                        {rahaatTextSection1}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} 