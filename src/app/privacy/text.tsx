import styles from './privacy.module.css';

export default function PrivacyText() {
    return (
        <div>
            <h2 className={styles.erstoria}>Privacy Policy</h2>
            <p className={styles.ptserif}><strong>Effective Date:</strong> 1st July 2025<br />
                <strong>Last Updated:</strong> 1st July 2025</p>
            <p className={styles.ptserif}>
                At Well-being & Arts Hub (a brand of Kriyam Well-being and Arts Hub Private Ltd.), your privacy is sacred — just like the space we hold in therapy and creative exploration. This Privacy Policy explains how we collect, use, and protect your information when you engage with our services, both online and offline.
            </p>
            <h3 className={styles.erstoria}>1. Who We Are</h3>
            <p className={styles.ptserif}>
                We are a collective of qualified, trauma-informed Creative Arts Psychotherapists, Embodied Therapists, and facilitators offering subscription-based psychotherapy, group workshops, community spaces, and reflective programs rooted in the arts and well-being.
            </p>
            <h3 className={styles.erstoria}>2. What We Collect</h3>
            <p className={styles.ptserif}><strong>Personal Data:</strong> Full name, contact info, age, billing details<br />
                <strong>Health/Clinical Data:</strong> Intake forms, session notes (stored with informed consent and confidentiality)<br />
                <strong>Tech Data:</strong> Browser, IP, usage via analytics tools<br />
                <strong>Cookies:</strong> Only those essential for user experience and analytics
            </p>
            <h3 className={styles.erstoria}>3. How We Use It</h3>
            <ul className={styles.ptserif}>
                <li>To provide therapeutic and non-clinical offerings such as group programs, movement workshops, and psychotherapy sessions</li>
                <li>To process payments and manage subscriptions</li>
                <li>To improve services based on usage trends</li>
                <li>To comply with laws under India&apos;s Digital Personal Data Protection Act (DPDPA)</li>
            </ul>
            <h3 className={styles.erstoria}>4. Sharing and Storage</h3>
            <ul className={styles.ptserif}>
                <li>We never sell your data</li>
                <li>We only share data with vetted third-party services (Zoom, payment processors, analytics platforms)</li>
                <li>All data is securely stored and access-controlled</li>
            </ul>
            <h3 className={styles.erstoria}>5. Your Rights</h3>
            <ul className={styles.ptserif}>
                <li>You have the right to:</li>
                <li>Request access, correction, or deletion of your data</li>
                <li>Withdraw consent for marketing communication</li>
                <li>Lodge complaints via info@wearehub.org</li>
            </ul>
        </div>
    );
} 