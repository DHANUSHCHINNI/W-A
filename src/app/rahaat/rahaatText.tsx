import styles from './rahaat.module.css';
import buttonStyles from '../components/Button.module.css';
import Link from 'next/link';

export const rahaatTextSection1 = (
    <div>
        <div className={`${styles.animatedHeading} ${styles.gradientBrownText}`} style={{ fontSize: '3rem', marginBottom: '3.5rem' }}>
            Relief. Reflection. Real connection.
        </div>
        <div className={styles.bodyText}>
            <span className={styles.highlight} style={{ fontSize: '2rem' }}>Raahat</span> is our psychotherapy offering at Well-being & Arts Hub, designed for anyone seeking high-quality, thoughtful, and holistic care — whether you’re sure therapy is for you or just starting to explore what support might feel like.<br /><br />
            We understand that mental health can be confusing or overwhelming — especially if you’ve never tried therapy before. That’s why we begin with a consultation session: a no-pressure space to ask questions, understand your options, and decide what’s right for you.<br /><br />
            <span className={styles.question}>What is Raahat?</span><br />
            <span className={styles.highlight}>Raahat</span> means relief — and that’s what we aim to offer.<br />
            Our approach to psychotherapy is depth-oriented, embodied, and creative. We don’t separate the mind from the body — we listen to both. We help you understand how your thoughts, emotions, physical sensations, and life experiences are connected, and how care can begin from that connection.<br /><br />
            <span className={styles.question}>We offer:</span><br />
            <b>Individual therapy:</b> Personalised, one-on-one sessions that support deep self-understanding at your pace<br /><br />
            <b>Group therapy:</b> Guided, shared spaces for reflection and connection alongside others (get in touch to know our ongoing groups)<br /><br />
            <span className={styles.question}>Who is Raahat for?</span><br />
            If you’re feeling anxious, lost, stuck, or overwhelmed<br />
            If you’ve tried therapy before — or this is your first time<br />
            If you want to understand yourself more deeply<br />
            If you’re looking for consistent, ethical, culturally sensitive care<br />
            Whether you’re ready to commit or simply want to start a conversation — you’re welcome here.<br /><br />
            <span className={styles.question}>What Raahat Offers</span><br />
            A consultation-first approach — clarity before commitment<br />
            Monthly subscription to individual or group psychotherapy sessions<br />
            Free access to community-based well-being events - like Stories, Dreams & Reflections, and Embodied Ease<br />
            Discounts on other workshops, events held by W&A.<br />
            Online access across India and worldwide<br /><br />
            <span className={styles.question}>Why Trust Us?</span><br />
            At <span className={styles.highlight}>Raahat</span>, we uphold the highest standards of ethical, evidence-based psychotherapy — grounded in cultural sensitivity and professional integrity.<br />
            Our therapists are licensed, internationally trained (HCPC Reg.) or trained under recognised psychotherapy programs in India<br />
            All practitioners are supported by ongoing supervision, peer reflection, and a commitment to continuous learning<br />
            Our therapists are trauma-informed, queer-affirmative, hold an intersectional approach and deeply experienced in offering evidence-based psychotherapy with embodied and creative tools<br />
            We offer care that is relational, reliable, and built for the long term — not quick fixes<br /><br />
            <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className={`${buttonStyles.myButton} ${styles.largeButton}`}>Book consultation today</button>
            </Link>
        </div>
    </div>
); 