'use client'
import TestAuthForm from './TestAuthForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function TestAuthPage() {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.replace('/');
            }
        });
        return () => unsubscribe();
    }, [router]);

    return (
        <main>
            <TestAuthForm />
        </main>
    );
} 