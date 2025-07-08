import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('WandA1'); // Explicitly use the WandA1 database
        const events = await db.collection('Events').find({}).toArray();
        return NextResponse.json({ events });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
} 