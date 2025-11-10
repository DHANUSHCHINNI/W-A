"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import styles from "../community/community.module.css";
import UserPayments from "./UserPayments";

const adminEmails = [
    'admin@example.com',
    'syedhamadanahmad@gmail.com',
    'dhanushchinni100@gmail.com'
    // add more emails here
];

export default function MyPlanPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <main className={styles.communityBackground}>
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Loading...</p>
                </div>
            </main>
        );
    }

    if (!user) {
        return (
            <main className={styles.communityBackground}>
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Please log in to view your plan details.</p>
                </div>
            </main>
        );
    }

    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase());
    const userEmail = user.email || "";

    if (isAdmin) {
        // We'll handle admin logic in a later step
        return (
            <main className={styles.communityBackground}>
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Admins: Please use the Dashboard from the User menu.</p>
                </div>
            </main>
        );
    }

    // User view: my-plan UI with UserPayments
    return (
        <div className={styles.communityBackground}>
            <div className={styles.communityContainer}>
                <h1 className={styles.heading}>Welcome{user.displayName ? `, ${user.displayName}` : ''}</h1>
                <div className={styles.subheading}>Here are your current plan details</div>
                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Payment History</h2>
                            <UserPayments email={userEmail} />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 24, color: '#fff', fontSize: '1rem', opacity: 0.85, fontStyle: 'italic', textAlign: 'center' }}>
                    *If you&apos;d like to cancel your current plan, drop us a mail and we&apos;ll make sure it&apos;s done!
                </div>
            </div>
        </div>
    );
} 