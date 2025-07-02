"use client";
import React from 'react';
import styles from './TrainingOfferingsCards.module.css';
import { motion } from 'framer-motion';

const offerings = [
    {
        id: 1,
        title: 'Flow & Creativity Labs',
        description: 'Embodied learning to overcome creative blocks and build emotional flow.'
    },
    {
        id: 2,
        title: 'Training for Professionals',
        description: 'Skill-building programs for teachers, therapists, and facilitators.'
    },
    {
        id: 3,
        title: 'Stress & Performance Support',
        description: 'Mind-body tools to manage burnout, anxiety, and performance pressure.'
    }
];

const rowVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            staggerChildren: 0.18
        }
    }
};

const TrainingOfferingsCards = () => (
    <div className={styles.offeringsSectionWrapper}>
        <h2 className={styles.offeringsHeading}>Our Key Offerings</h2>
        <motion.div
            className={styles.cardsRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
        >
            {offerings.map((offering, i) => (
                <div className={styles.offeringCard} key={i}>
                    <h3 className={styles.offeringTitle}>{offering.title}</h3>
                    <div className={styles.offeringDescription}>{offering.description}</div>
                </div>
            ))}
        </motion.div>
    </div>
);

export default TrainingOfferingsCards; 