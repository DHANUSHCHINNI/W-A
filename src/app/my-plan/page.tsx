"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import styles from "../community/community.module.css";

interface Payment {
    name: string;
    payment_status: boolean;
    payment_amount: number;
    transaction_id: string;
    subscription_type: string;
    [key: string]: any;
}

export default function MyPlanPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [payment, setPayment] = useState<Payment | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                try {
                    setLoading(true);
                    setError(null);
                    const res = await fetch("/api/paymentHistory", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: firebaseUser.email }),
                    });
                    const data = await res.json();
                    if (res.ok && data.payments && data.payments.length > 0) {
                        setPayment(data.payments[0]);
                    } else {
                        setPayment(null);
                        setError("No payment details found.");
                    }
                } catch (err) {
                    setError("Failed to fetch payment details.");
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setPayment(null);
            }
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

    if (error) {
        return (
            <main className={styles.communityBackground}>
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>{error}</p>
                </div>
            </main>
        );
    }

    return (
        <div className={styles.communityBackground}>
            <div className={styles.communityContainer}>
                <h1 className={styles.heading}>
                    Welcome{payment?.name ? `, ${payment.name}` : ''}
                </h1>
                <div className={styles.subheading}>Here are your current plan details</div>
                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Plan Information</h2>
                            <div className={styles.cardDescription}>
                                <strong>Email:</strong> {user.email}<br />
                                <strong>Payment Status:</strong> {payment?.payment_status ? "Paid" : "Unpaid"}<br />
                                <strong>Payment Amount:</strong> {payment?.payment_amount ?? "-"}<br />
                                <strong>Transaction ID:</strong> {payment?.transaction_id ?? "-"}<br />
                                <strong>Subscription Type:</strong> {payment?.subscription_type ?? "-"}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 24, color: '#fff', fontSize: '1rem', opacity: 0.85, fontStyle: 'italic', textAlign: 'center' }}>
                    *If you'd like to cancel your current plan, drop us a mail and we'll make sure it's done!
                </div>
            </div>
        </div>
    );
} 