'use client';
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './Story.module.css';
import OurStoryfin1 from '../assets/OurStoryfin1.jpg';
import OurStoryfin2 from '../assets/OurStoryfin2.jpg';
import { storyTextSection1, storyTextSection2, storyTextSection3, storyTextSection4, storyTextSection5, storyTextSection6 } from './storyText';
import kritijaImage from '../assets/KritijaHeadshot.jpg';
import amrutaImage from '../assets/AHHeadshot.jpg';
export default function StoryPage() {
    return (
        <main className={styles.storyContainer}>
            <Navbar show={true} />
            <div className={styles.centeredOnceUponSection}>
                <h2 className={styles.onceUponIntro}>Once upon a Time...</h2>
                <div className={styles.bigErstoria}>Two friends. One question:</div>
                <div className={styles.centeredTextSection}>{storyTextSection1.slice(1)}</div>
            </div>
            <div className={styles.sideBySideRow} style={{ marginTop: '16px' }}>
                <div className={styles.sideBySideText}>{storyTextSection2}</div>
                <div className={styles.sideBySideImgWrap}>
                    <Image
                        src={OurStoryfin1}
                        alt="Our Story 1"
                        width={350}
                        height={210}
                        className={styles.sideBySideImg}
                    />
                </div>
            </div>

            {/* Image left, text right (text wraps around image) */}
            <div className={styles.wrapRow}>
                <div className={styles.wrapTextImageSection}>
                    <Image
                        src={OurStoryfin2}
                        alt="Our Story 2"
                        width={500}
                        height={300}
                        className={`${styles.image} ${styles.imageOnLeft}`}
                    />
                    <div className={styles.textWrapSection}>
                        <p className={styles.ptSerif}>
                            It was a dream rooted in justice, joy, and imagination. A dream where arts are not an add-on, but a form of medicine— a part of a global movement recognising the role of creative expression in healthcare and human flourishing. <span className={styles.erstoria}>That dream became the <b>Well-being & Arts Hub</b> — A living, breathing space for creative connection.</span> We are artists, therapists, listeners, wanderers. We hold spaces where the personal meets the political, and the playful meets the profound. We're building a modular ecosystem of creative care. Not just for individuals, but for workplaces, communities, and the world. Whether you're a seeker, a professional, a wanderer, or simply someone who feels — You're welcome here. <span className={styles.erstoria}>Because care, like art, was never meant to be solitary.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Amruta section */}
            <div className={styles.subheadingWrapper}>
                <h2 className={styles.subheading}>Meet Amruta Huddar (she/her)</h2>
                <h3 className={styles.smallerSubheading}>[Co-founder | Drama & Movement Psychotherapist | Embodied Psychotherapist | Disability Justice Advocate]</h3>
            </div>
            <div className={styles.contentWrapper}>
                <div className={`${styles.imageSection} ${styles.imageOnLeft}`}>
                    <Image
                        src={amrutaImage}
                        alt="Amruta Huddar"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {storyTextSection5}
                </div>
            </div>

            {/* Kritija section */}
            <div className={styles.subheadingWrapper}>
                <h2 className={styles.subheading}>Meet Kritija Saxena (she/her)</h2>
                <h3 className={styles.smallerSubheading}>[Co-founder | Drama & Movement Psychotherapist | Psychologist | Forensic Dramatherapist]</h3>
            </div>
            <div className={styles.contentWrapper}>
                <div className={`${styles.imageSection} ${styles.imageOnLeft}`}>
                    <Image
                        src={kritijaImage}
                        alt="Kritija Saxena"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {storyTextSection6}
                </div>
            </div>
        </main>
    );
} 