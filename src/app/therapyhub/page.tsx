'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Image from 'next/image';
import styles from './therapy.module.css';
import { therapyTextsection1, therapyTextsection1b, } from './therapyText';
import couchBg from '../assets/couch.avif';
import PlanCards from './PlanCards';
import Footer from "../components/Footer";

export default function TherapyHubPage() {
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
            <Footer />
        </div>
    );
} 