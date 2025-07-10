import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './community.module.css';
import Silhouette1 from '../components/Silhouette1';
import Silhouette2 from '../components/Silhouette2';
import Silhouette6 from '../components/Silhouette6';
// Import TMC images to circulate
import TMC2 from '../assets/TMC2.jpg';

const tmcImages = [
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140056/tmc1.jpg',
    TMC2,
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140064/tmc4.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140068/tmc5.jpg',
];
import { headers } from 'next/headers';

async function getEvents() {
    // Ensure headers() is not awaited and used directly
    const headersList = headers() as unknown as Headers;
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/events`, { cache: 'no-store' });
    const data = await res.json();
    return data.events || [];
}

export default async function CommunityPage() {
    const events: any[] = await getEvents();

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
                    {events.map((event: any, idx: number) => (
                        <div className={styles.card} key={event._id || idx}>
                            <div className={styles.cardImage}>
                                <Image
                                    src={tmcImages[idx % tmcImages.length]}
                                    alt={event.title}
                                    width={220}
                                    height={180}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{event.title}</h2>
                                <p className={styles.cardDescription}>{event.description}</p>
                                <div className={styles.cardMeta}>{event.date}<br />
                                    {typeof event.price === 'number' && !isNaN(event.price) && (
                                        <span>Price: ₹{event.price}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 