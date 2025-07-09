'use client'
import React, { useState } from 'react';
import styles from './TestPaymentForm.module.css';

export default function TestPaymentForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        payment_status: 'true',
        payment_amount: '',
        transaction_id: '',
        subscription_type: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...form,
            payment_status: form.payment_status === 'true',
            payment_amount: Number(form.payment_amount)
        };
        const res = await fetch('/api/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const text = await res.text();
        setResult(text);
    };

    return (
        <div className={styles.container}>
            <h2>Test Payment Form</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input name="payment_status" placeholder="Payment Status (true/false)" value={form.payment_status} onChange={handleChange} />
                <input name="payment_amount" placeholder="Payment Amount" value={form.payment_amount} onChange={handleChange} />
                <input name="transaction_id" placeholder="Transaction ID" value={form.transaction_id} onChange={handleChange} />
                <input name="subscription_type" placeholder="Subscription Type" value={form.subscription_type} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
            {result && <pre>{result}</pre>}
        </div>
    );
} 