'use client'
import { useState } from 'react';
import styles from './dashboard.module.css';

type RegisterPayeeProps = {
    className?: string;
};

export default function RegisterPayee({ className = "" }: RegisterPayeeProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        payment_amount: '',
        subscription_type: '',
    });
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        try {
            const res = await fetch('/api/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    payment_amount: Number(formData.payment_amount),
                    subscription_type: formData.subscription_type,
                    payment_status: false,
                    transaction_id: null,
                }),
            });
            if (!res.ok) throw new Error('Failed to register payee');
            setMessage('✅ Payee registered successfully');
            setFormData({
                name: '',
                email: '',
                payment_amount: '',
                subscription_type: '',
            });
        } catch (err) {
            setMessage('❌ Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
            />
            <input
                name="payment_amount"
                type="number"
                placeholder="Payment Amount"
                value={formData.payment_amount}
                onChange={handleChange}
                required
                className={styles.input}
            />
            <input
                name="subscription_type"
                placeholder="Subscription Type"
                value={formData.subscription_type}
                onChange={handleChange}
                required
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Register Payee
            </button>
            {message && <div className={styles.message} style={{ color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</div>}
        </form>
    );
} 