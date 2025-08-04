"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Event {
    _id?: string;
    title: string;
    description: string;
    date?: string;
    price?: number;
    venue?: string;
    link?: string;
}

interface EventCardsProps {
    upcomingEvents: Event[];
    pastEvents: Event[];
    tmcImages: (string | any)[];
    styles: { [key: string]: string };
}

function isMobile() {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 600;
}

export default function EventCards({ upcomingEvents, pastEvents, tmcImages, styles }: EventCardsProps) {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
    const [mobile, setMobile] = useState(isMobile());

    React.useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleToggle(id: string) {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    }

    function renderCard(event: Event, idx: number, isUpcoming: boolean) {
        const key = event._id || `${isUpcoming ? 'up' : 'past'}-${idx}`;
        const expandedClass = mobile && expanded[key] ? styles.expanded || 'expanded' : '';
        return (
            <div
                className={`${styles.card} ${expandedClass}`}
                key={key}
                onClick={mobile ? () => handleToggle(key) : undefined}
                style={mobile ? { cursor: 'pointer' } : {}}
            >
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
                    <p className={styles.cardDescription}>
                        {(!mobile || expanded[key]) && event.description}
                    </p>
                    <div className={styles.cardMeta} style={{ display: !mobile || expanded[key] ? undefined : 'none' }}>
                        {event.date && <>{event.date}<br /></>}
                        {typeof event.price === 'number' && !isNaN(event.price) && (
                            <span>Price: ₹{event.price}<br /></span>
                        )}
                        {event.venue && <span>Venue: {event.venue}<br /></span>}
                        {event.link && event.link !== '-' && (
                            <a href={event.link} target="_blank" rel="noopener noreferrer">
                                <button>{isUpcoming ? 'Book Now' : 'View Link'}</button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {upcomingEvents.length > 0 && (
                <>
                    <h3 className={styles.eventSectionHeading}>Upcoming Events</h3>
                    <div className={styles.cardsWrapper}>
                        {upcomingEvents.map((event, idx) => renderCard(event, idx, true))}
                    </div>
                </>
            )}
            {pastEvents.length > 0 && (
                <>
                    <h2 className={styles.eventSectionHeading}>Past Events</h2>
                    <div className={styles.cardsWrapper}>
                        {pastEvents.map((event, idx) => renderCard(event, idx, false))}
                    </div>
                </>
            )}
        </>
    );
} 