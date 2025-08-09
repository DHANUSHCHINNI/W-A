import styles from './rahaat.module.css';

export const rahaatTextSection1 = (
    <div>
        {/* Keep main heading exactly as is */}
        <div
            className={`${styles.animatedHeading} ${styles.gradientBrownText}`}
            style={{ fontSize: '3rem', marginBottom: '3.5rem' }}
        >
            Relief. Reflection. Real connection.
        </div>

        <div className={styles.bodyText}>
            <span className={styles.highlight} style={{ fontSize: '2rem' }}>Raahat</span> is our premium psychotherapy offering at Well-being & Arts Hub — designed for anyone seeking high-quality, thoughtful, and holistic care.
            <br /><br />
            We begin with a consultation session: a no-pressure space to ask questions, explore your needs, and decide what’s right for you — with full transparency and no urgency to commit.
            <br /><br />

            <span className={styles.question}>We offer:</span>
        </div>
    </div>
);
