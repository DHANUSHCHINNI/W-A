import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect().then(async (connectedClient) => {
            await connectedClient.db("admin").command({ ping: 1 });
            console.log("✅ MongoDB connected (development)");
            return connectedClient;
        });
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect().then(async (connectedClient) => {
        await connectedClient.db("admin").command({ ping: 1 });
        console.log("✅ MongoDB connected (production)");
        return connectedClient;
    });
}

export default clientPromise;
