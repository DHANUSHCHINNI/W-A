import buttonStyles from '../components/Button.module.css';
import Link from "next/link";


export const corporateTextHeading =
    'At Well-being & Arts Hub, we offer corporate wellness programs that combine neuroscience, somatic (body-based) practices, and creative arts to support mental health, prevent burnout, and enhance team performance.';

export const corporateTextBody = [
    <p key="1">
        Our approach blends science with creativity—helping employees manage stress while boosting engagement and emotional resilience.<br /><br />
        <span style={{ fontFamily: 'Erstoria, serif', fontWeight: 'bold', fontSize: '2rem', color: '#BAB1AB', display: 'block', marginBottom: '1.2rem', marginTop: '2.2rem' }}>Offerings:</span>
        <span style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <button className={buttonStyles.myButton} style={{ marginTop: '1rem', display: 'inline-block' }}>Bespoke Workshops &amp; Webinars</button> on stress, emotional intelligence, and creative leadership
        </span>
        <br />
        <Link href="/fillingyourcup" passHref>
            <button
                className={buttonStyles.myButton}
                style={{ marginTop: "1rem", display: "inline-block" }}
            >
                Filling Your Cup
            </button>
        </Link> is our signature offering for burnout-prevention to refuel your team<br />
        <Link href="/wellbeingretreats" passHref>
            <button
                className={buttonStyles.myButton}
                style={{ marginTop: "1rem", display: "inline-block" }}
            >
                Well-being Retreats
            </button>
        </Link> are the immersive resets for teams <br /><br />
        Discover employee wellness solutions that go deeper—trusted by HR professionals, team leaders, and organizations seeking care, connection, and creativity at work.
    </p>
]; 