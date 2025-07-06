'use client';

import { useState } from 'react';

export default function RegisterPayee() {
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
                    payment_status: false,        // always false
                    transaction_id: null,         // always null
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
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
            <h2 className="text-xl font-bold">Register Payee</h2>

            <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />

            <input
                name="payment_amount"
                type="number"
                placeholder="Payment Amount"
                value={formData.payment_amount}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />

            <input
                name="subscription_type"
                placeholder="Subscription Type"
                value={formData.subscription_type}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />

            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-80"
            >
                Submit
            </button>

            {message && <p className="text-sm mt-2">{message}</p>}
        </form>
    );
}
