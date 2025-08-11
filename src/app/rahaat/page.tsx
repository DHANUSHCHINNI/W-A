'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import styles from './rahaat.module.css';
import { raahatTextSection, rahaatTextSection1 } from './rahaatText';
import Footer from "../components/Footer";
import Link from 'next/link';
import buttonStyles from '../components/Button.module.css';


// Box (hub card) content

const rahaatOfferHubs = [
    {
        title: "Individual Therapy",
        description:
            "Personalised, one-on-one sessions that support deep self-understanding at your pace."
    },
    {
        title: "Group Therapy",
        description:
            "Guided, shared spaces for reflection and connection alongside others (get in touch to know our ongoing groups)."
    }
];

const rahaatHubs = [
    {
        title: "Why a Subscription Model?",
        description:
            "Raahat is a monthly subscription for therapy + community care. It’s designed to make emotional support more sustainable for both the people seeking care and the people offering it.\n\nYou get:\n Supports budgeting for care without compromising on quality\n Makes ongoing support sustainable emotionally and financially\n Therapists and facilitators who offer intentional and paced care, and are not burnt out by volume.\n Access to creative, non-clinical spaces that complement therapy and meet different parts of you through stories, bodywork, reflection, and more."
    },
    {
        title: "How is Raahat different from other therapy platforms?",
        description:
            "Raahat offers more than therapy — it offers context and community.\nAlongside individual support, members also engage in community-based experiences where storytelling, art, and embodiment are central.\n\nNo bots, no overwhelm, just real people, meaningful experiences, and space to breathe."
    },
    {
        title: "Who is it for?",
        description:
            "Raahat is for anyone who’s:\n Feeling emotionally stretched or stuck\n Longing for consistent care\nNeeding a safe space to express without judgment\n Caught in the loop of overthinking, self-doubt, or burnout\n Trying to navigate a difficult relationship, breakup, or a life transition"
    }
];

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

                    <div className={styles.textSection}>{rahaatTextSection1}</div>

                    <div className={styles.hubCardsRow2}>
                        {rahaatOfferHubs.map((hub, idx) => (
                            <div className={styles.hubCard2} key={idx}>
                                <div className={styles.hubCardTitle}>{hub.title}</div>
                                <div className={styles.hubCardDescription}>{hub.description}</div>
                            </div>
                        ))}
                    </div>
                    {/* Hub cards as vertical column */}
                    <div className={styles.hubCardsColumn}>
                        {rahaatHubs.map((hub, idx) => (
                            <div className={styles.hubCard} key={idx}>
                                <div className={styles.hubCardTitle}>{hub.title}</div>
                                <div className={styles.hubCardDescription}>
                                    {hub.description.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.textSection2}>
                        {raahatTextSection}
                    </div>
                    <div className={styles.buttonWrapper}>
                        <a
                            href="https://forms.gle/HGfFM9Yi8dpLzKDD7"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button className={`${buttonStyles.myButton} ${styles.largeButton}`}>
                                Book consultation today
                            </button>
                        </a>
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
}
