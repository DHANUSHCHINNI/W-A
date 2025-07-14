'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import styles from './corporate.module.css';
import { corporateTextHeading, corporateTextBody } from './corporateText';
import Carousel from '../components/Carousel';
import Carousel2Styles from '../components/Carousel2.module.css';

const corporateImages = [
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140073/corporatehub1.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140074/corporatehub2.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140076/corporatehub3.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140078/corporatehub7.jpg',
];

export default function CorporateHubPage() {
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
            {/* Video header section */}
            <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' } as React.CSSProperties}>
                <video
                    src="/work.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    background: 'rgba(46, 26, 19, 0.3)'
                } as React.CSSProperties}>
                    <h1 className={styles.rndHeading}>Corporate Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <div style={{ fontFamily: 'Erstoria, serif', fontSize: '2.3rem', color: '#BAB1AB', marginBottom: '3.5rem', marginTop: '3rem', fontWeight: 350 }}>
                        {corporateTextHeading}
                    </div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <Carousel images={corporateImages} altPrefix="Corporate Hub Image" styles={Carousel2Styles} />
                    </div>
                    <div style={{ fontFamily: 'PT Serif, serif', fontSize: '1.7rem', color: '#BAB1AB' }}>
                        {corporateTextBody}
                    </div>
                </div>
            </div>
        </div>
    );
} 