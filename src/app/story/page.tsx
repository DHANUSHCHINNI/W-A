'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HamburgerNavbar from "../components/HamburgerNavbar";
import Image from "next/image";
import styles from './Story.module.css';
import { storyTextSection2, storyTextSection4, storyTextSection5, storyTextSection6 } from './storyText';
import Footer from "../components/Footer";

export default function StoryPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <main className={styles.storyContainer}>
            {!isMobile ? (
                <Navbar show={true} />
            ) : (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            )}
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <h1 className={styles.onceUponIntroBig}>Once upon a Time…</h1>
                <div className={styles.heroSubheading}>Two friends. One question:</div>
                <div className={styles.heroTagline}>
                    What does it mean to care — deeply, creatively, collectively?
                </div>
                <div className={styles.scrollIndicator}>↓</div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className={styles.storyMainSection}>
                {/* Side-by-side row */}
                <div className={styles.sideBySideRow}>
                    <div className={styles.sideBySideText}>{storyTextSection2}</div>
                    <div className={styles.sideBySideImgWrap}>
                        <Image
                            src="https://res.cloudinary.com/djspsll41/image/upload/v1754205214/ourstoryfin1.png"
                            alt="Our Story 1"
                            width={350}
                            height={210}
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Wrap row: Image left, text right (text wraps image) */}
                <div className={styles.wrapRow}>
                    <div className={styles.wrapTextImageSection}>
                        <Image
                            src="https://res.cloudinary.com/djspsll41/image/upload/v1752139191/ourstoryfin2.jpg"
                            alt="Our Story 2"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                        <div className={styles.textWrapSection}>
                            <div className={styles.textSection}>{storyTextSection4}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------ BIO SECTION ------------ */}
            {/* --- Amruta Bio --- */}
            <section className={styles.bioSection}>
                <div className={styles.subheadingWrapper}>
                    <h2 className={styles.subheading}><span className={styles.highlight}>Meet Amruta Huddar (she/her)</span></h2>
                    <h3 className={styles.smallerSubheading}><span className={styles.highlight}>
                        [Co-founder | Drama & Movement Psychotherapist | Embodied Psychotherapist | Disability Justice Advocate] </span>
                    </h3>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageSection}>
                        <Image
                            src="https://res.cloudinary.com/djspsll41/image/upload/v1752140072/AHHeadshot.jpg"
                            alt="Amruta Huddar"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textSection}>{storyTextSection5}</div>
                </div>
            </section>

            {/* --- Kritija Bio --- */}
            <section className={styles.bioSection}>
                <div className={styles.subheadingWrapper}>
                    <h2 className={styles.subheading}> <span className={styles.highlight}>Meet Kritija Saxena (she/her)</span></h2>
                    <h3 className={styles.smallerSubheading}><span className={styles.highlight}>
                        [Co-founder | Drama & Movement Psychotherapist | Psychologist | Forensic Dramatherapist] </span>
                    </h3>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageSection}>
                        <Image
                            src="https://res.cloudinary.com/djspsll41/image/upload/v1752140070/kritijaHeadshot.jpg"
                            alt="Kritija Saxena"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textSection}>{storyTextSection6}</div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
