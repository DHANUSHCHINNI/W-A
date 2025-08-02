import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from "mongodb";

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

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, description, date, price } = body;

        if (!title || !description || !date || typeof price !== 'number' || isNaN(price)) {
            return NextResponse.json({ error: 'All fields are required and price must be a number' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('WandA1'); // Use your events DB
        const result = await db.collection('Events').insertOne({ title, description, date, price });

        return NextResponse.json({ success: true, insertedId: result.insertedId });
    } catch (err) {
        console.error('Error inserting event:', err);
        return NextResponse.json({ error: 'Failed to add event' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const result = await db.collection("events").deleteOne({ _id: new ObjectId(params.id) });
        if (result.deletedCount === 1) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false }, { status: 404 });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to delete event';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}