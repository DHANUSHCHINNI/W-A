import styles from './sukoon.module.css';

export const sukoonTextSection1 = (
    <div>
        <div className={styles.animatedHeading}>
            From hustle to <span className={styles.husshhhAnimated}>husshhh</span>. Sukoon, delivered.
        </div>
        <div className={styles.animatedHeading} style={{ fontSize: '2rem', marginBottom: '1.1rem', animationDelay: '0.3s' }}>
            Care needs consistency.
        </div>
        <div className={styles.animatedHeading} style={{ fontSize: '2rem', marginBottom: '1.1rem', animationDelay: '0.6s' }}>
            Here, art isn't extra — it's the core.
        </div>
        <div style={{ marginBottom: '3.5rem' }} />
        <div className={styles.bodyText}>
            A monthly subscription for emotional well-being — where art, reflection, and community come together to help you pause, feel, and reconnect. Instead of one-off sessions, <span className={styles.highlight}>Sukoon</span> offers a steady rhythm of care through live, creative gatherings.<br /><br />
            <span className={styles.question}>Why a Subscription?</span><br />
            Because care needs consistency.<br />
            <span className={styles.highlight}>Sukoon</span> gives you:<br />
            A monthly rhythm for emotional check-ins<br />
            Live, arts-based sessions and community events<br />
            Support that grows with you, not just during crisis<br /><br />
            <span className={styles.question}>Why Creativity?</span><br />
            Because creativity is the gym for your emotional health. It regulates. It reconnects. It gives shape to what words often can't.<br />
            Here, art isn't extra — it's the core. From it grows clarity, calm, and connection.<br /><br />
            <span className={styles.question}>Who Can Join?</span><br />
            <span className={styles.highlight}>Sukoon</span> is for anyone seeking a creative way to care:<br />
            If you're feeling overwhelmed or just need space<br />
            If you're waiting for the right therapist — this is a meaningful meanwhile<br />
            If you're in therapy, Sukoon complements and deepens the process<br />
            If you've completed therapy, it helps you stay connected to yourself<br />
            If you're a therapist, artist, educator, student — or just someone who feels<br />
            No art skills needed. Just curiosity and presence.<br /><br />
            <span className={styles.question}>What's Included?</span><br />
            Monthly live creative sessions<br />
            Access to community events like Stories, Dreams & Reflections and Embodied Ease<br />
            A safe, supportive space for expression — at your own pace
        </div>
    </div>
); 