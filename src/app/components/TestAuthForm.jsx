'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function TestAuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Sign up successful!');
            if (redirect) router.push(redirect);
        } catch (err) {
            setMessage(err.message);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Sign in successful!');
            if (redirect) router.push(redirect);
        } catch (err) {
            setMessage(err.message);
        }
    };

    const handleSignOut = async () => {
        setMessage('');
        try {
            await signOut(auth);
            setMessage('Signed out successfully!');
        } catch (err) {
            setMessage(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        setMessage('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setMessage('Signed in with Google!');
            if (redirect) router.push(redirect);
        } catch (err) {
            setMessage(err.message);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8, background: '#fafafa' }}>
            <h2>Test Auth Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleSignIn}>Sign In</button>
                <button type="button" onClick={handleGoogleSignIn} style={{ background: '#db4437', color: 'white' }}>
                    Sign in with Google
                </button>
            </form>
            <button onClick={handleSignOut} style={{ marginTop: '1rem' }}>Sign Out</button>
            <div style={{ marginTop: '1rem' }}>
                {user ? <div>Logged in as: <b>{user.email}</b></div> : <div>Not logged in</div>}
                {message && <div style={{ color: 'blue', marginTop: 8 }}>{message}</div>}
            </div>
        </div>
    );
} 