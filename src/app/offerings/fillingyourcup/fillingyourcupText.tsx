import styles from './fillingyourcup.module.css';

export const fillingyourcupTextsection1 = (
    <div>
        <div className={styles.animatedHeading} style={{ marginBottom: '6rem', fontSize: '2.7rem' }}>
            A Creative Well-being Experience for High-Performing Teams
        </div>
        <div className={styles.animatedHeading} style={{ fontSize: '2.7rem', marginBottom: '4.5rem', animationDelay: '0.3s' }}>
            Filling Your Cup helps you protect and nurture your greatest asset.
        </div>
        <div className={`${styles.animatedHeading} ${styles.gradientBrownText}`} style={{ fontSize: '2.7rem', marginBottom: '3rem', animationDelay: '0.6s' }}>
            Give your best without burning out.
        </div>
        <div className={styles.bodyText}>
            In fast-paced work environments, we often ask our people to pour from a cup that's running dry. <span className={styles.highlight}>Filling Your Cup</span> is our signature arts-based workshop designed to offer space to pause, reflect, and refuel—so your teams can give their best without burning out.<br /><br />
            Developed by licensed mental health professionals and seasoned facilitators, this experiential offering provides hands-on, participatory activities, webinars and group sessions that reduce stress, build emotional resilience, and foster a culture of care.<br /><br />
            Thinking mental well-being, team morale, creative problem solving, team building experience within your industry context? Think <span className={styles.highlight}>Filling Your Cup</span>. Can be run as a one-time recharge or monthly ritual. Suitable for teams of all sizes, across sectors.<br /><br />
            <span className={styles.highlight}>Filling Your Cup</span> helps you protect and nurture your greatest asset—not just for your people's well-being, but for the long-term health of your organisation.
        </div>
    </div>
); 