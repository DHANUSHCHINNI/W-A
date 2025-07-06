import styles from './cookie.module.css';

export default function CookieText() {
    return (
        <div>
            <h2 className={styles.erstoria}>Cookie Policy</h2>
            <p className={styles.ptserif}><strong>Effective Date:</strong> 1st July 2025</p>
            <p className={styles.ptserif}>
                This site uses cookies to:
            </p>
            <ul className={styles.ptserif}>
                <li>Provide basic functionality (language settings, form submissions)</li>
                <li>Collect anonymous analytics (e.g., Google Analytics)</li>
                <li>We do not use cookies for third-party advertising.</li>
            </ul>
            <h3 className={styles.erstoria}>How You Can Control Cookies</h3>
            <ul className={styles.ptserif}>
                <li>You can change your browser settings to manage cookies</li>
                <li>Blocking essential cookies may limit some website features</li>
                <li>By continuing to use our site, you consent to our cookie use.</li>
            </ul>
        </div>
    );
} 