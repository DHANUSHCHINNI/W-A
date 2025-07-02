import React, { useState, useEffect, useRef } from 'react';
import styles from './testimonials.module.css';
import { testimonials } from './testimonialsText';

export default function TestimonialsPage() {
    const [index, setIndex] = useState(0);
    const visibleCount = 3;
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
            >
                <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div className={styles.cardsRow}>
                    {testimonials.slice(index, index + visibleCount).map((t, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.text}>{t.text}</div>
                            <div className={styles.name}>- {t.name}</div>
                        </div>
                    ))}
                </div>
                <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
                </button>
            </div>
        </div>
    );
} 