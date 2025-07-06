import clientPromise from '@/lib/mongodb';
import {NextResponse} from "next/server";
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(); // Defaults to the DB name in your MongoDB URI
        const payments = await db.collection('payments').find({}).toArray();

        return Response.json({ payments });
    } catch (error) {
        console.error('Error fetching payments:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db(); // Replace with your DB name
        const payments = db.collection('payments');

        const result = await payments.insertOne(body);
        return NextResponse.json({ success: true, insertedId: result.insertedId });
    } catch (err) {
        console.error('Error inserting payee:', err);
        return NextResponse.json({ success: false, error: 'Failed to save payee' }, { status: 500 });
    }
}