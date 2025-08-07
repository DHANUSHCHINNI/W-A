'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import HamburgerNavbar from '../../components/HamburgerNavbar';
import styles from './fillingyourcup.module.css';
import { fillingyourcupTextsection1 } from './fillingyourcupText';
import Footer from "../../components/Footer";

export default function FillingYourCupPage() {
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
            {/* Background image instead of video */}
            <img
                src="https://res.cloudinary.com/djspsll41/image/upload/v1752133741/samples/coffee.jpg"
                alt="Coffee background"
                className={styles.videoBackground}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100vw', height: '100vh', zIndex: 0, position: 'fixed', top: 0, left: 0 }}
            />
            <div className={styles.videoOverlay}></div>
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1
                        className={styles.rndHeading}
                        style={{ marginBottom: '6rem', fontFamily: 'Erstoria, serif' }}
                    >
                        Filling your Cup
                    </h1>
                    <div
                        className={styles.textSection}
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        {fillingyourcupTextsection1}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} 