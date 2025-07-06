import styles from './disclaimer.module.css';

export default function DisclaimerText() {
    return (
        <div>
            <h2 className={styles.erstoria}>Disclaimer</h2>
            <p className={styles.ptserif}><strong>Last Updated:</strong> 1st July 2025</p>
            <p className={styles.ptserif}>
                Well-being & Arts Hub (a brand of Kriyam Well-being and Arts Hub Private Ltd.) is run by licensed, trauma-informed Creative Arts Psychotherapists and Embodied Therapists, alongside experienced facilitators in the field of arts and well-being. Our offerings range from one-on-one psychotherapy to group programs, reflective workshops, and creative labs.
            </p>
            <h3 className={styles.erstoria}>However, please note:</h3>
            <ul className={styles.ptserif}>
                <li>Content on this site is for informational and reflective purposes and not a substitute for urgent medical or psychiatric care</li>
                <li>Simply visiting this site does not create a therapist-client relationship</li>
                <li>All therapy is provided after clinical screening and informed consent</li>
                <li>Well-being and creative workshops are not intended for crisis care</li>
                <li>If you are in crisis, experiencing suicidal ideation, or severe emotional distress, please contact local emergency services or a mental health helpline.</li>
                <li>We are not liable for outcomes arising from site use without a formal therapeutic relationship.</li>
            </ul>
        </div>
    );
} 