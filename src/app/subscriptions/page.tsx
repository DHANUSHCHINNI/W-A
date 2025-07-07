'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import PaymentDetailsDashboard from "@/app/components/PaymentDetailsDashboard";
import RegisterPayee from "@/app/components/registerPayee"
import UserPayments from "@/app/components/UserPayments"
export default function SubscriptionsPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // 🔐 Admin emails (lowercase recommended for consistency)

    const adminEmails = [
        'admin@example.com',
        'syedhamadanahmad@gmail.com',
        // add more emails here
    ];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>You must be logged in to view this page.</div>;

    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase());
    const userEmail = user!.email || ""
    return (
        <div style={{ padding: '2rem' }}>
            {isAdmin ? (

                <div>
                    <RegisterPayee />
                    <PaymentDetailsDashboard />
                </div>
            ) : (
                <UserPayments email={userEmail} />
            )}
        </div>
    );
}
