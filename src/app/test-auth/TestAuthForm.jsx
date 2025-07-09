'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styles from '../test-auth/TestAuthForm.module.css';

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
        <div className={styles.authBackground}>
            <div className={styles.authContainer}>
                <div className={styles.formCard}>
                    <h2 className={styles.heading}>Sign In</h2>
                    <form className={styles.form}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={styles.input}
                        />
                        <button onClick={handleSignUp} className={styles.button} type="button">Sign Up</button>
                        <button onClick={handleSignIn} className={styles.button} type="button">Sign In</button>
                        <button type="button" onClick={handleGoogleSignIn} className={styles.button} style={{ background: '#db4437', color: 'white' }}>
                            Sign in with Google
                        </button>
                    </form>
                    <button onClick={handleSignOut} className={styles.button} style={{ marginTop: '1rem', background: '#666' }}>Sign Out</button>
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        {user ? <div>Logged in as: <b>{user.email}</b></div> : <div>Not logged in</div>}
                        {message && <div className={styles.message} style={{ color: message.startsWith('Sign') ? 'green' : 'red' }}>{message}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
} 