"use client";
import { useState, useEffect } from "react";
import RegisterPayee from './registerPayee';
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import styles from './dashboard.module.css';
import PaymentDetailsDashboard from "@/app/components/PaymentDetailsDashboard";
import Navbar from "../components/navbar";
import HamburgerNavbar from '../components/HamburgerNavbar';
import Footer from "../components/Footer";

const adminEmails = [
    'admin@example.com',
    'syedhamadanahmad@gmail.com',
    'dhanushchinni100@gmail.com',
    'amruta@wearehub.org',
    'kritija@wearehub.org',
    'info@wearehub.org'

    // add more emails here
];

export default function AdminDashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [eventForm, setEventForm] = useState({
        title: '',
        description: '',
        date: '',
        price: '',
        type: '',
        link: '',
        venue: '',
    });
    const [eventMessage, setEventMessage] = useState<string | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auth check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
    if (!user || !user.email || !adminEmails.includes(user.email.toLowerCase())) {
        return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>You must be an admin to view this page.</div>;
    }

    // Handle event form changes
    const handleEventChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEventForm((prev) => ({ ...prev, [name]: value }));
    };

    // Handle event form submit
    const handleEventSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEventMessage(null);
        try {
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: eventForm.title,
                    description: eventForm.description,
                    date: eventForm.date,
                    price: parseFloat(eventForm.price),
                    type: eventForm.type,
                    link: eventForm.link,
                    venue: eventForm.venue,
                }),
            });
            if (!res.ok) throw new Error('Failed to add event');
            setEventMessage('✅ Event added successfully');
            setEventForm({ title: '', description: '', date: '', price: '', type: '', link: '', venue: '' });
        } catch (err) {
            setEventMessage('❌ Error submitting event');
        }
    };

    return (
        <div className={styles.dashboardBackground}>
            {isMobile ? (
                <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
            ) : (
                <Navbar show={true} />
            )}
            <div className={styles.dashboardContainer}>
                <h1 className={styles.heading}>Admin Dashboard</h1>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Register Payee</h2>
                    <RegisterPayee className={styles.form} />
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Add New Event</h2>
                    <div className={styles.formCard}>
                        {/* Add Event form here (existing code) */}
                        <form onSubmit={handleEventSubmit} className={styles.form}>
                            <input
                                name="title"
                                placeholder="Event Title"
                                value={eventForm.title}
                                onChange={handleEventChange}
                                required
                                className={styles.input}
                            />
                            <textarea
                                name="description"
                                placeholder="Event Description"
                                value={eventForm.description}
                                onChange={handleEventChange}
                                required
                                className={styles.textarea}
                            />
                            <input
                                name="date"
                                placeholder="Date (e.g. July 20, 2024 · Sukoon Hub, Delhi)"
                                value={eventForm.date}
                                onChange={handleEventChange}
                                required
                                className={styles.input}
                            />
                            <input
                                name="price"
                                type="number"
                                placeholder="Price (e.g. 499)"
                                value={eventForm.price}
                                onChange={handleEventChange}
                                required
                                min="0"
                                step="0.01"
                                className={styles.input}
                            />
                            <input
                                name="type"
                                placeholder="Type (e.g. Upcoming or closed)"
                                value={eventForm.type}
                                onChange={handleEventChange}
                                className={styles.input}
                            />
                            <input
                                name="link"
                                placeholder="Event Link (optional)"
                                value={eventForm.link}
                                onChange={handleEventChange}
                                className={styles.input}
                            />
                            <input
                                name="venue"
                                placeholder="Venue (optional)"
                                value={eventForm.venue}
                                onChange={handleEventChange}
                                className={styles.input}
                            />
                            <button type="submit" className={styles.button}>Add Event</button>
                            {eventMessage && <div className={styles.message} style={{ color: eventMessage.startsWith('✅') ? 'green' : 'red' }}>{eventMessage}</div>}
                        </form>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>All Payment Details</h2>
                    <div className={styles.formCard}>
                        <PaymentDetailsDashboard />
                    </div>
                </section>
                <Navbar show={true} />
            </div>
            <Footer />
        </div>
    );
} 