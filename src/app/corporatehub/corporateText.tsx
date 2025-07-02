import buttonStyles from '../components/Button.module.css';

export const corporateTextHeading =
    'At Well-being & Arts Hub, we offer corporate wellness programs that combine neuroscience, somatic (body-based) practices, and creative arts to support mental health, prevent burnout, and enhance team performance.';

export const corporateTextBody = [
    <p key="1">
        Our approach blends science with creativity—helping employees manage stress while boosting engagement and emotional resilience.<br /><br />
        <b>Offerings:</b><br />
        Bespoke Workshops &amp; Webinars on stress, emotional intelligence, and creative leadership<br /><br />
        <button className={buttonStyles.myButton} style={{ marginTop: '1rem', display: 'inline-block' }}>Filling Your Cup</button> – Our signature offering for burnout-prevention to refuel your team<br /><br />
        <button className={buttonStyles.myButton} style={{ marginTop: '1rem', display: 'inline-block' }}>Well-being Retreats</button> – Immersive resets for teams <br /><br />
        Discover employee wellness solutions that go deeper—trusted by HR professionals, team leaders, and organizations seeking care, connection, and creativity at work.
    </p>
]; 