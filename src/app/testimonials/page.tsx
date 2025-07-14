'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './testimonials.module.css';
import { testimonials } from './testimonialsText';

export default function TestimonialsPage() {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const visibleCount = isMobile ? 1 : 3;
    const maxIndex = testimonials.length - visibleCount;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handlePrev = () => setIndex(i => i === 0 ? maxIndex : i - 1);
    const handleNext = () => setIndex(i => i === maxIndex ? 0 : i + 1);

    // Auto-scroll effect
    useEffect(() => {
        if (isHovered) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(() => {
            setIndex(prev => {
                if (prev >= maxIndex) return 0;
                return prev + 1;
            });
        }, 4000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, maxIndex]);

    return (
        <div className={styles.testimonialsBg}>
            <div
                className={styles.carouselWrapper}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={isMobile ? { flexDirection: 'column', alignItems: 'center', padding: '0 8px', width: '100vw', maxWidth: '100vw' } : {}}
            >
                {isMobile ? null : (
                    <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                )}
                {isMobile ? (
                    <div
                        className={styles.cardsRow}
                        style={{
                            flexDirection: 'row',
                            gap: 0,
                            width: '100vw',
                            alignItems: 'center',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                className={styles.card}
                                key={i}
                                style={{
                                    width: '90vw',
                                    minWidth: 0,
                                    maxWidth: 400,
                                    padding: '24px 12px 18px 12px',
                                    minHeight: 180,
                                    scrollSnapAlign: 'center',
                                    flex: '0 0 90vw',
                                    marginRight: i === testimonials.length - 1 ? 0 : 12,
                                }}
                            >
                                <div className={styles.text}>{t.text}</div>
                                <div className={styles.name}>- {t.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className={styles.cardsRow}
                        style={{ flexDirection: 'row', gap: 32, overflow: 'hidden' }}
                    >
                        {testimonials.slice(index, index + visibleCount).map((t, i) => (
                            <div
                                className={styles.card}
                                key={i}
                                style={{}}
                            >
                                <div className={styles.text}>{t.text}</div>
                                <div className={styles.name}>- {t.name}</div>
                            </div>
                        ))}
                    </div>
                )}
                {isMobile ? null : (
                    <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
                    </button>
                )}
            </div>
        </div>
    );
} 