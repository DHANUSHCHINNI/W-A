import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();
        const payments = await db
            .collection('payments')
            .find({ email })
            .toArray();

        return NextResponse.json({ payments });
    } catch (err) {
        console.error('Error in /api/paymentHistory:', err);
        return NextResponse.json({ error: 'Failed to fetch payment history' }, { status: 500 });
    }
}
