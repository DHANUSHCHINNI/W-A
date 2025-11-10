"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Event {
    _id?: string;
    title: string;
    description: string;
    date?: string;
    price?: number;
    venue?: string;
    link?: string;
    image?: string; // Cloudinary URL (optional, can be null/empty)
}

interface EventCardsProps {
    upcomingEvents: Event[];
    pastEvents: Event[];
    tmcImages: (string | StaticImageData)[];
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
        const key = event._id || `${isUpcoming ? 'Upcoming' : 'closed'}-${idx}`;
        const expandedClass = mobile && expanded[key] ? styles.expanded || 'expanded' : '';

        // ✅ Choose event image if present -> else fallback to tmcImages
        const imageSrc =
            event.image && typeof event.image === 'string' && event.image.trim() !== ''
                ? event.image
                : tmcImages[idx % tmcImages.length];

        return (
            <div
                className={`${styles.card} ${expandedClass}`}
                key={key}
                onClick={mobile ? () => handleToggle(key) : undefined}
                style={mobile ? { cursor: 'pointer' } : {}}
            >
                <div className={styles.cardImage}>
                    <Image
                        src={imageSrc}
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
                    <div
                        className={styles.cardMeta}
                        style={{ display: !mobile || expanded[key] ? undefined : 'none' }}
                    >
                        {event.date && <>{event.date}<br /></>}
                        {typeof event.price === 'number' && !isNaN(event.price) && (
                            <span>Price: ₹{event.price}<br /></span>
                        )}
                        {event.venue && <span>Venue: {event.venue}<br /></span>}
                    </div>

                    {isUpcoming && (
                        <>
                            <div className={styles.cardButtonsWrapper}>
                                <div className={styles.cardButtons}>
                                    <a
                                        href="https://forms.gle/cv4tesYaauGGz4ESA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button className={styles.accessButton}>
                                            <span className={styles.accessButtonTitle}>
                                                Get Sukoon Access – ₹999
                                            </span>
                                            <span className={styles.accessButtonDesc}>
                                                All of this month&apos;s events + member perks
                                            </span>
                                        </button>
                                    </a>
                                    {event.link && event.link.trim() !== '' && event.link !== '-' && (
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <button className={styles.bookButton}>
                                                Book This Event
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
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
