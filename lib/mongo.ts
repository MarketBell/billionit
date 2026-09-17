import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB || "oi_license";

type Cache = { client: MongoClient | null; promise: Promise<MongoClient> | null };
const g = globalThis as unknown as { _biMongo?: Cache };
const cache: Cache = g._biMongo ?? (g._biMongo = { client: null, promise: null });

export async function getDb(): Promise<Db> {
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (cache.client) return cache.client.db(dbName);
  if (!cache.promise) {
    cache.promise = new MongoClient(uri, { maxPoolSize: 5 }).connect().then((client) => {
      cache.client = client;
      return client;
    });
  }
  const client = await cache.promise;
  return client.db(dbName);
}
