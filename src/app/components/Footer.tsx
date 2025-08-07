'use client';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <footer className={styles.footerBg}>
            <div className={styles.footerContent}>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Who We Are</div>
                    <ul>
                        <li><Link href="/story" className={styles.footerLink}>About Us</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Path to Engage</div>
                    <ul>
                        <li><Link href="/contact" className={styles.footerLink}>Collaborate With Us</Link></li>
                        <li><Link href="/contact" className={styles.footerLink}>Work With Us</Link></li>
                        <li><Link href="/contact" className={styles.footerLink}>Get In Touch</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Subscriptions</div>
                    <ul>
                        <li><Link href="/sukoon" className={styles.footerLink}>Sukoon Subscription</Link></li>
                        <li><Link href="/contact" className={styles.footerLink}>Raahat Subscription</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Offerings</div>
                    <ul>
                        <li><Link href="/innovationlab" className={styles.footerLink}>Project Bhava</Link></li>
                        <li><Link href="/offerings/fillingyourcup" className={styles.footerLink}>Fill Your Cup</Link></li>
                        <li>Community Events</li>
                        <li><Link href="/wellbeingretreats" className={styles.footerLink}>Well-being Retreats</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                © 2025 Kriyam Well-being and Arts Hub Private Ltd. All rights reserved.
                | <a href="https://wearehub.org" target="_blank" rel="noopener noreferrer">wearehub.org</a> | Powered by W&A
            </div>
            {isMobile ? (
                <div className={styles.footerPolicies} style={{ flexDirection: 'column', gap: 0, alignItems: 'center', marginTop: 24 }}>
                    <Link href="/privacy" className={styles.policyLink} style={{ margin: 0, padding: '6px 0' }}>Privacy Policy</Link>
                    <Link href="/terms" className={styles.policyLink} style={{ margin: 0, padding: '6px 0' }}>Terms of Use</Link>
                    <Link href="/cookie" className={styles.policyLink} style={{ margin: 0, padding: '6px 0' }}>Cookie Policy</Link>
                    <Link href="/disclaimer" className={styles.policyLink} style={{ margin: 0, padding: '6px 0' }}>Disclaimer</Link>
                </div>
            ) : (
                <div className={styles.footerPolicies}>
                    <Link href="/privacy" className={styles.policyLink}>Privacy Policy</Link>
                    <span className={styles.policyDivider}>|</span>
                    <Link href="/terms" className={styles.policyLink}>Terms of Use</Link>
                    <span className={styles.policyDivider}>|</span>
                    <Link href="/cookie" className={styles.policyLink}>Cookie Policy</Link>
                    <span className={styles.policyDivider}>|</span>
                    <Link href="/disclaimer" className={styles.policyLink}>Disclaimer</Link>
                </div>
            )}
        </footer>
    );
} 