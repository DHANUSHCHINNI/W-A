'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Footer from '../components/Footer';
import styles from './members.module.css';

export default function WorkInProgressPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            {/* Navbar */}
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}

            {/* Background section */}
            <section className={styles.background}>
                <div className={styles.overlay}></div>
                <div className={styles.centerText}>
                    Work in progress!
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
