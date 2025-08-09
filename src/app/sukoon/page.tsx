'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import styles from './sukoon.module.css';
import { sukoonTextSection1, sukoonTextSection2 } from './sukoonText';
import Footer from "../components/Footer";

// Define hub cards: Only title and a short description
const sukoonHubs = [
    {
        title: "Why a Subscription?",
        description: "Because care needs consistency. Sukoon gives you: A monthly rhythm for emotional check-ins. Live, arts-based sessions and community events. Support that grows with you, not just during crisis."
    },
    {
        title: "Why Creativity?",
        description: "Because creativity is the gym for your emotional health. It regulates. It reconnects. It gives shape to what words often can't. Here, art isn't extra — it's the core. From it grows clarity, calm, and connection."
    },
    {
        title: "What's Included?",
        description: "Monthly live creative sessions. Access to community events like Stories, Dreams & Reflections and Embodied Ease. A safe, supportive space for expression — at your own pace."
    }
    // Add more as needed
];

export default function SukoonPage() {
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

            {/* --- Fixed Video Background Layer --- */}
            <div className={styles.bgWrapper}>
                <video autoPlay loop muted playsInline className={styles.videoBackground}>
                    <source src="/flower.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.videoOverlay}></div>
            </div>

            {/* --- Navbar Switch --- */}
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}

            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.rndHeading}>Sukoon</h1>
                    <div className={styles.textSection}>
                        {sukoonTextSection1}
                    </div>

                    {/* --- Hub Card Row, always present, layout handled by CSS --- */}
                    <div className={styles.hubCardsRow}>
                        {sukoonHubs.map((hub, idx) => (
                            <div className={styles.hubCard} key={idx}>
                                <div className={styles.hubCardTitle}>{hub.title}</div>
                                <div className={styles.hubCardDescription}>{hub.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* --- Second Text Section --- */}
                    <div className={styles.textSection2}>
                        {sukoonTextSection2}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
