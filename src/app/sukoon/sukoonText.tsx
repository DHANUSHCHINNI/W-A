import styles from './sukoon.module.css';

export const sukoonTextSection1 = (
    <div>
        <div className={styles.animatedHeading}>
            From hustle to <span className={styles.husshhhAnimated}>husshhh</span>. Sukoon, delivered.
        </div>
        <div className={styles.animatedHeading} style={{ fontSize: '2rem', marginBottom: '0.9rem', animationDelay: '0.3s' }}>
            Care needs consistency.
        </div>
        <div className={styles.animatedHeading} style={{ fontSize: '2rem', marginBottom: '0.9rem', animationDelay: '0.6s' }}>
            Here, art isn't extra — it's the core.
        </div>
        <div style={{ marginBottom: '2.5rem' }} />
        <div className={styles.bodyText}>
            <span className={styles.introText}>
                A monthly subscription for emotional well-being — where art, reflection, and community come together to help you pause, feel, and reconnect. Instead of one-off sessions, <span className={styles.highlight}>Sukoon</span> offers a steady rhythm of care through live, creative gatherings.
            </span>

        </div>
    </div>
);

export const sukoonTextSection2 = (
    <div style={{ marginTop: '5rem' }}>
        <div className={styles.bodyText}>
            <span className={styles.question}>Who Can Join?</span>
            <span className={styles.highlight}>Sukoon</span> is for anyone seeking a creative way to care:
            <br />
            <span className={styles.highlight2}>
                If you're feeling overwhelmed or just need space
                <br />
                If you're waiting for the right therapist — this is a meaningful meanwhile
                <br />
                If you're in therapy, Sukoon complements and deepens the process
                <br />
                If you've completed therapy, it helps you stay connected to yourself
                <br />
                If you're a therapist, artist, educator, student — or just someone who feels
                <br />
                No art skills needed. Just curiosity and presence.
            </span>
            <br /><br />
        </div>
    </div>
);
