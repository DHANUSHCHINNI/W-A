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
            We begin with a consultation session: a no-pressure space to ask questions, explore your needs, and decide what’s right for you with full transparency and no urgency to commit.
            <br /><br />

            <span className={styles.question}>We offer:</span>
        </div>
    </div>
);

export const raahatTextSection = (
    <div style={{ marginTop: '5rem' }}>
        <div className={styles.bodyText}>
            <span className={styles.question}>Why Trust Us?</span>{" "}
            At <span className={styles.highlight}>Raahat</span>, we uphold the highest
            standards of ethical, evidence-based psychotherapy grounded in cultural
            sensitivity and professional integrity.
            <br />
            Our therapists are licensed, internationally trained
            <span className={styles.highlight2}> (HCPC Reg.)</span> or trained under
            recognised psychotherapy programs in India.
            <br />
            All practitioners are supported by ongoing supervision, peer reflection,
            and a commitment to continuous learning.
            <br />
            Our therapists are trauma-informed, queer-affirmative, hold an
            intersectional approach, and are deeply experienced in offering
            evidence-based psychotherapy with embodied and creative tools.
            <br />
            We offer care that is relational, reliable, and built for the long term —
            not quick fixes.
            <br />
            <br />
        </div>
    </div>
);

