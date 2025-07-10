"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './LogoCarousel.module.css';

const logos = [
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135701/gsahw.png', alt: 'GSAHW' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135702/iafp.jpg', alt: 'IAFP' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135703/iawmh.jpg', alt: 'IAWMH' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135704/nadta.webp', alt: 'NADTA' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135705/stamma.svg', alt: 'STAMMA' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135707/cmtai.jpg', alt: 'CMTAI' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135708/badth.jpg', alt: 'BADth' },
    { src: 'https://res.cloudinary.com/djspsll41/image/upload/v1752135709/baatn.jpg', alt: 'BAATN' },
];

export default function LogoCarousel() {
    return (
        <div className={styles.logos}>
            <div className={styles.logosTrack}>
                {logos.concat(logos).map((logo, idx) => (
                    <span className={styles.logoItem} key={idx}>
                        <Image src={logo.src} alt={logo.alt} width={100} height={60} style={{ objectFit: 'contain' }} />
                    </span>
                ))}
            </div>
        </div>
    );
} 