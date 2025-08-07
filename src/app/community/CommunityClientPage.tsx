"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import HamburgerNavbar from '../components/HamburgerNavbar';
import Silhouette6 from '../components/Silhouette6';
import EventCards from './EventCards';

interface Event {
    _id?: string;
    title: string;
    description: string;
    date?: string;
    price?: number;
    venue?: string;
    link?: string;
    type?: string;
}

interface CommunityClientPageProps {
    upcomingEvents: Event[];
    pastEvents: Event[];
    tmcImages: (string | any)[];
    styles: { [key: string]: string };
}

export default function CommunityClientPage({ upcomingEvents, pastEvents, tmcImages, styles }: CommunityClientPageProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 900);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.communityBackground}>

            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}
            <div className={styles.communityContainer}>
                <h1 className={styles.heading}>Community events</h1>
                <div className={styles.subheading}>Here's what's been brewing in W&A recently</div>
                <EventCards
                    upcomingEvents={upcomingEvents}
                    pastEvents={pastEvents}
                    tmcImages={tmcImages}
                    styles={styles}
                />
            </div>
        </div>
    );
} 