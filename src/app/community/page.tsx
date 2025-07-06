import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './community.module.css';
import { events } from './communitytexts';
import Silhouette1 from '../components/Silhouette1';
import Silhouette2 from '../components/Silhouette2';
import Silhouette6 from '../components/Silhouette6';

export default function CommunityPage() {
    return (
        <div className={styles.communityBackground}>
            <div className={styles.silhouetteLeft}>
                <Silhouette6 className={styles.silhouette6} style={{}} />
            </div>
            <div className={styles.silhouetteRight}>
                <Silhouette2 className={styles.silhouette2} style={{}} />
            </div>
            <Navbar show={true} />
            <div className={styles.communityContainer}>
                <h1 className={styles.heading}>Community events</h1>
                <div className={styles.subheading}>Here's what's been brewing in W&A recently</div>
                <div className={styles.cardsWrapper}>
                    {events.map((event, idx) => (
                        <div className={styles.card} key={idx}>
                            <div className={styles.cardImage}>
                                <Image src={event.image} alt={event.title} width={220} height={180} className={styles.image} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{event.title}</h2>
                                <p className={styles.cardDescription}>{event.description}</p>
                                <div className={styles.cardMeta}>{event.meta}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 