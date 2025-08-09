import styles from './wellbeingretreats.module.css';

export const wellbeingretreatsTextsection1 = (
    <div>
        <div className={styles.animatedHeading} style={{ marginTop: '1rem', marginBottom: '3.5rem', fontSize: '2.1rem' }}>
            Immersive retreats blending somatics, creative arts, and nature—designed to support rest, reflection, play, and inner renewal.
        </div>
        <div className={styles.bodyText}>
            Whether you're an individual or part of a team, each retreat offers space to slow down, reconnect with the body, and <span className={styles.highlight}>rediscover creative flow</span>—together, and with ease.<br /><br />
            Perfect for those seeking <span className={styles.highlight}>meaningful offsites</span>, team well-being retreats, or personal healing journeys.<br /><br />
            If you're a venue partner or looking to curate a retreat for your community or organization, <span className={styles.highlight}>reach out to collaborate.</span><br /><br />
            Watch this space for <span className={styles.highlight}>upcoming retreats.</span><br /><br />
            Looking for arts-based wellness retreats, body-mind healing spaces, or nature-led mental health experiences?
            <br /><br />
            <span className={styles.gradientBrownText}>You’re in the right place.</span>
        </div>
    </div>
);

export const wellbeingRetreatsTextSection2 = [
    <p key="2">
        <b>Art & Nature Retreat</b><br />
        A weekend of creative workshops, nature walks, and group reflection in a serene setting.<br />
        Ideal for anyone seeking inspiration and peace.<br />
        <button style={{ marginTop: '1rem' }}>Learn More →</button>
    </p>,
    <p key="3">
        <b>Mindful Movement Retreat</b><br />
        Includes yoga, dance, and embodied practices to help you unwind and recharge.<br />
        <button style={{ marginTop: '1rem' }}>See Details →</button>
    </p>,
    <p key="4">
        Interested in joining or want to know more? Contact us for upcoming dates and details.<br /><br />
        <b>Custom Retreats:</b> We also design bespoke retreats for organizations, teams, and communities.
    </p>,
    <button key="5" style={{ marginTop: '1rem' }}>Contact Us →</button>
]; 