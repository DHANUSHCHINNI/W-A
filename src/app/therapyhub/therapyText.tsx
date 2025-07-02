import buttonStyles from '../components/Button.module.css';

export const therapyTextsection1 = [
    <div key="1" style={{ fontFamily: 'Erstoria, serif', fontSize: '2.8rem', color: '#BAB1AB', marginBottom: '2.5rem' }}>
        Care that's consistent, creative, and centred on you.
    </div>
];

export const therapyTextsection1b = [
    <div key="2" style={{ fontFamily: 'PT Serif, serif', fontSize: '1.7rem', color: '#BAB1AB' }}>
        Welcome to the Therapy Hub by Well-being & Arts Hub—where mental health support is steady, creative, and centered around you.<br />
        We offer a subscription-based therapy model that ensures continuity, choice, and community, without the stress of one-off bookings.
    </div>
];

export const therapyTextsection2 = [
    <p key="3">
        <b>Sukoon</b><br />
        A community space for like-minded individuals to explore well-being through storytelling, embodiment, and everyday art.<br />
        Ideal for those seeking community and reflection.<br />
        <button className={buttonStyles.myButton} style={{ marginTop: '1rem' }}>Explore Sukoon →</button>
    </p>,
    <p key="4">
        <b>Raahat</b><br />
        Includes everything in Sukoon, plus access to 1:1 therapy and group therapy with licensed professionals.<br />
        <button className={buttonStyles.myButton} style={{ marginTop: '1rem' }}>Step into Raahat →</button>
    </p>,
    <p key="5">
        Looking for subscription-based therapy, queer-affirmative and trauma-informed therapists, internationally licensed, and embodied professionals? You're in the right place.<br /><br />
        <b>Supervision for Therapists &amp; Creatives</b><br />
        We also offer reflective spaces for professionals seeking growth and guidance.<br />
        <b>Clinical Supervision:</b> For therapists and care practitioners to strengthen reflection and ethics.<br />
        <b>Creative Supervision:</b> For artists, teams, and arts organizations to move through blocks, reconnect with purpose, and grow their practice.<br />
    </p>,
    <button key="6" className={buttonStyles.myButton} style={{ marginTop: '1rem' }}>Book Consultation →</button>
]; 