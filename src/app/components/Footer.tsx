import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerBg}>
            <div className={styles.footerContent}>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Who We Are</div>
                    <ul>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Path to Engage</div>
                    <ul>
                        <li>Collaborate With Us</li>
                        <li>Work With Us</li>
                        <li>Get In Touch</li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Subscriptions</div>
                    <ul>
                        <li>Sukoon Subscription</li>
                        <li>Raahat Subscription</li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>Offerings</div>
                    <ul>
                        <li>Project Bhava</li>
                        <li>Fill Your Cup</li>
                        <li>Community Events</li>
                        <li>Well-being Retreats</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                © 2025 Well-being & Arts Hub | <a href="https://wearehub.org" target="_blank" rel="noopener noreferrer">wearehub.org</a> | Powered by W&A
            </div>
        </footer>
    );
} 