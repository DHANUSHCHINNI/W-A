'use client';
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './Story.module.css';
import ourStoryImage from '../assets/ourstory2.jpeg';
import ourStoryImage2 from '../assets/ourstory3.jpeg';
import { storyTextSection1, storyTextSection2, storyTextSection3, storyTextSection4 } from './storyText';


export default function StoryPage() {
    return (
        <main className={styles.storyContainer}>
            <Navbar show={true} />
            <h1 className={styles.heading}>Our Story</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.textSection}>
                    {storyTextSection1}
                </div>
                <div className={styles.imageSection}>
                    <Image
                        src={ourStoryImage}
                        alt="Our Story"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.imageSection}>
                    <Image
                        src={ourStoryImage2}
                        alt="Our Story Part 2"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {storyTextSection2}
                </div>
            </div>

            <div className={styles.subheadingWrapper}>
                <h2 className={styles.subheading}>Meet Amruta Huddar (she/her)</h2>
                <h3 className={styles.smallerSubheading}>[Co-founder | Drama & Movement Psychotherapist | Embodied Psychotherapist | Disability Justice Advocate
                    ]</h3>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.imageSection}>
                    <Image
                        src={ourStoryImage}
                        alt="Amruta Huddar"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {storyTextSection3}
                </div>
            </div>

            <div className={styles.subheadingWrapper}>
                <h2 className={styles.subheading}>Meet Kritija Saxena (she/her)</h2>
                <h3 className={styles.smallerSubheading}>[Co-founder | Drama & Movement Psychotherapist | Psychologist | Forensic Dramatherapist
                    ]</h3>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.imageSection}>
                    <Image
                        src={ourStoryImage2}
                        alt="Kritija Saxena"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.textSection}>
                    {storyTextSection4}
                </div>
            </div>
        </main>
    );
} 