import styles from './terms.module.css';

export default function TermsText() {
    return (
        <div>
            <h2 className={styles.erstoria}>Terms of Use</h2>
            <p className={styles.ptserif}><strong>Effective Date:</strong> 1st July 2025</p>
            <p className={styles.ptserif}>
                By visiting our website or engaging with Well-being & Arts Hub (a brand of Kriyam Well-being and Arts Hub Private Ltd.), you agree to the following terms:
            </p>
            <h3 className={styles.erstoria}>1. Use of Services</h3>
            <ul className={styles.ptserif}>
                <li>Our offerings are intended for individuals 18+ unless explicitly stated</li>
                <li>Psychotherapy services are provided following clinical intake</li>
                <li>Our group workshops and well-being programs are for personal development, creativity, and exploration</li>
                <li>Content on the website does not constitute professional advice unless under contractual agreement</li>
            </ul>
            <h3 className={styles.erstoria}>2. Intellectual Property</h3>
            <ul className={styles.ptserif}>
                <li>All content (text, images, processes) belongs to Kriyam Well-being and Arts Hub Private Ltd.</li>
                <li>Do not reuse or replicate without written consent</li>
            </ul>
            <h3 className={styles.erstoria}>3. Payment & Refunds</h3>
            <ul className={styles.ptserif}>
                <li>Fees for workshops and other offerings vary</li>
                <li>Refunds are only processed under rare, pre-agreed conditions</li>
            </ul>
            <h3 className={styles.erstoria}>4. Service Changes</h3>
            <ul className={styles.ptserif}>
                <li>We may update offerings, schedules, or terms without prior notice</li>
                <li>Continued use implies agreement to changes</li>
            </ul>
            <h3 className={styles.erstoria}>5. Legal</h3>
            <ul className={styles.ptserif}>
                <li>Governed by the laws of India</li>
                <li>Disputes shall be subject to Bangalore jurisdiction</li>
            </ul>
        </div>
    );
} 