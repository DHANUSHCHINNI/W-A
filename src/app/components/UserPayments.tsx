'use client';

import { useEffect, useState } from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Box,
} from '@mui/material';

type Payment = {
    _id: string;
    name: string;
    email: string;
    payment_status: boolean;
    payment_amount: number;
    transaction_id: string | null;
    subscription_type: string;
};

type Props = {
    email: string;
};

export default function UserPayments({ email }: Props) {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!email) return;

        const fetchPayments = async () => {
            try {
                const res = await fetch('/api/paymentHistory', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                });

                const data = await res.json();
                if (Array.isArray(data)) {
                    setPayments(data);
                } else if (Array.isArray(data.payments)) {
                    setPayments(data.payments);
                } else {
                    throw new Error('Unexpected data format');
                }
            } catch (err: any) {
                setError('Failed to fetch payments');
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, [email]);

    if (loading) {
        return (
            <Box className="flex justify-center items-center h-40">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    const paid = payments.filter((p) => p.payment_status);
    const unpaid = payments.filter((p) => !p.payment_status);

    const renderTable = (data: Payment[], title: string) => (
        <div className="mb-10">
            <Typography variant="h6" className="mb-2">{title}</Typography>
            {data.length === 0 ? (
                <Typography className="text-sm text-gray-500">No records</Typography>
            ) : (
                <TableContainer component={Paper} className="shadow-md">
                    <Table>
                        <TableHead className="bg-gray-100 dark:bg-neutral-800">
                            <TableRow>
                                <TableCell>Subscription</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Transaction ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((p) => (
                                <TableRow key={p._id}>
                                    <TableCell>{p.subscription_type}</TableCell>
                                    <TableCell>₹{p.payment_amount}</TableCell>
                                    <TableCell>{p.transaction_id || '—'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Typography variant="h5" className="mb-6">Your Payments</Typography>
            {renderTable(paid, '✅ Payment History')}
            {renderTable(unpaid, '❌ Pending Payments')}
        </div>
    );
}
