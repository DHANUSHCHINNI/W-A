import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './community.module.css';
import Silhouette1 from '../components/Silhouette1';
import Silhouette2 from '../components/Silhouette2';
import Silhouette6 from '../components/Silhouette6';
// Import TMC images to circulate
import TMC2 from '../assets/TMC2.jpg';
import CommunityClientPage from './CommunityClientPage';
import { headers } from 'next/headers';

const tmcImages = [
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140056/tmc1.jpg',
    TMC2,
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140064/tmc4.jpg',
    'https://res.cloudinary.com/djspsll41/image/upload/v1752140068/tmc5.jpg',
];

async function getEvents() {
    // Ensure headers() is not awaited and used directly
    const headersList = headers() as unknown as Headers;
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/events`, { cache: 'no-store' });
    const data = await res.json();
    return data.events || [];
}

export default async function CommunityPage() {
    const events = await getEvents();

    // Separate events
    const upcomingEvents = events.filter((event: any) => event.type && event.type.toLowerCase() === 'upcoming');
    const pastEvents = events.filter((event: any) => !event.type || event.type.toLowerCase() !== 'upcoming');

    return (
        <CommunityClientPage
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
            tmcImages={tmcImages}
            styles={styles}
        />
    );
} 