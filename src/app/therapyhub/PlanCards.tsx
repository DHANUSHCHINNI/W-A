import React from 'react';
import buttonStyles from '../components/Button.module.css';
import styles from './PlanCards.module.css';

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
    },
    {
        id: 3,
        title: 'Supervision for Therapists & Creatives',
        description: (
            <>
                We also offer reflective spaces for professionals seeking growth and guidance.<br />
                <b>Clinical Supervision:</b> For therapists and care practitioners to strengthen reflection and ethics.<br />
                <b>Creative Supervision:</b> For artists, teams, and arts organizations to move through blocks, reconnect with purpose, and grow their practice.
            </>
        ),
        button: 'Book Consultation →',
    },
];

const PlanCards = () => (
    <div className={styles.planSectionWrapper}>
        <h2 className={styles.choosePlanHeading}>Choose your plan</h2>
        <div className={styles.cardsRow}>
            {plans.map((plan, idx) => (
                <div className={styles.planCard} key={plan.title}>
                    <h3 className={styles.planTitle}>{plan.title}</h3>
                    <div className={styles.planDescription}>{plan.description}</div>
                    <div className={styles.buttonWrapper}>
                        <button className={buttonStyles.myButton + ' ' + styles.planButton}>{plan.button}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default PlanCards; 