"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './LogoCarousel.module.css';
import gsahw from '../assets/gsahw.png';
import IAFP from '../assets/IAFP.jpg';
import IAWMH from '../assets/IAWMH.jpg';
import NADTA from '../assets/NADTA.webp';
import stamma from '../assets/stamma.svg';
import CMTAI from '../assets/CMTAI.jpg';
import BADth from '../assets/BADth.jpg';
import BAATN from '../assets/BAATN.jpg';

const logos = [
    { src: gsahw, alt: 'GSAHW' },
    { src: IAFP, alt: 'IAFP' },
    { src: IAWMH, alt: 'IAWMH' },
    { src: NADTA, alt: 'NADTA' },
    { src: stamma, alt: 'STAMMA' },
    { src: CMTAI, alt: 'CMTAI' },
    { src: BADth, alt: 'BADth' },
    { src: BAATN, alt: 'BAATN' },
];

export default function LogoCarousel() {
    return (
        <div className={styles.logos}>
            <div className={styles.logosTrack}>
                {logos.concat(logos).map((logo, idx) => (
                    <span className={styles.logoItem} key={idx}>
                        <Image src={logo.src} alt={logo.alt} height={60} style={{ width: 'auto', objectFit: 'contain' }} />
                    </span>
                ))}
            </div>
        </div>
    );
} 