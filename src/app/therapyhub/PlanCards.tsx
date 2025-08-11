import React from 'react';
import Link from 'next/link'; // Import Link
import buttonStyles from '../components/buttons3.module.css';
import styles from './PlanCards2.module.css';

const plans = [
    {
        id: 1,
        title: 'Sukoon',
        description: (
            <>
                A community space for like-minded individuals to explore well-being through storytelling, embodiment, and everyday art.<br />
                Ideal for those seeking community and reflection.
            </>
        ),
        button: 'Explore Sukoon →',
        link: '/sukoon',
    },
    {
        id: 2,
        title: 'Raahat',
        description: (
            <>
                Includes everything in Sukoon, plus access to 1:1 therapy and group therapy with licensed professionals.<br />
                Looking for subscription-based therapy, queer-affirmative and trauma-informed therapists, internationally licensed, and embodied professionals? You're in the right place.
            </>
        ),
        button: 'Step into Raahat →',
        link: '/rahaat',
    },
    {
        id: 3,
        title: 'Supervision for Therapists & Creatives',
        description: (
            <>
                A steady space to think, feel, and grow.<br />
                Rooted in reflection and care, our supervision supports therapists and creatives to navigate complexities, stay connected to purpose, and sustain meaningful practice.
            </>
        ),
        button: 'Book Consultation →',
        link: 'https://forms.gle/HGfFM9Yi8dpLzKDD7',
    },
];

const PlanCards = () => (
    <div className={styles.planSectionWrapper}>
        <h2 className={styles.choosePlanHeading}>Choose your plan</h2>
        <div className={styles.cardsRow}>
            {plans.map((plan) => (
                <div className={styles.planCard} key={plan.id}>
                    <h3 className={styles.planTitle}>{plan.title}</h3>
                    <div className={styles.planDescription}>{plan.description}</div>
                    <div className={styles.buttonWrapper}>
                        <Link href={plan.link} className={`${buttonStyles.myButton} ${styles.planButton}`}>
                            {plan.button}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default PlanCards;
