'use client';

import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    CircularProgress,
    Box,
} from '@mui/material';

type Payment = {
    _id: string;
    name: string;
    email: string;
    payment_status: boolean;
    payment_amount: number;
    transaction_id: string;
    subscription_type: string;
};

export default function PaymentDetailsDashboard() {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const res = await fetch('/api/payments');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setPayments(data);
                } else if (Array.isArray(data.payments)) {
                    setPayments(data.payments);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    if (loading) {
        return (
            <Box className="flex justify-center items-center h-screen">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box className="p-8">
                <Typography color="error">Error: {error}</Typography>
            </Box>
        );
    }

    return (
        <Box className="p-8">
            <Typography variant="h5" gutterBottom>
                Payment Details
            </Typography>
            <TableContainer component={Paper} className="shadow-md">
                <Table>
                    <TableHead className="bg-gray-100 dark:bg-neutral-800">
                        <TableRow>
                            <TableCell>_id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Transaction ID</TableCell>
                            <TableCell>Subscription</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map((p) => (
                            <TableRow key={p._id}>
                                <TableCell>{p._id}</TableCell>
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.email}</TableCell>
                                <TableCell>
                                    {p.payment_status ? '✅ Paid' : '❌ Unpaid'}
                                </TableCell>
                                <TableCell>₹{p.payment_amount}</TableCell>
                                <TableCell>{p.transaction_id || '—'}</TableCell>
                                <TableCell>{p.subscription_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
