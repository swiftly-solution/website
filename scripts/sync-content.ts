import { sync, type DocumentRecord } from 'typesense-fumadocs-adapter';
import { Client } from 'typesense';
import { readFileSync } from 'node:fs';
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const filePath = '.next/server/app/static.json.body';

const content = readFileSync(filePath);
const records = JSON.parse(content.toString()) as DocumentRecord[];

const client = new Client({
    nodes: [{ url: process.env.TYPESENSE_HOST! }],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY!,
    connectionTimeoutSeconds: 60 * 15,
});

void sync(client, {
    typesenseCollectionName: 'swiftlys2',
    documents: records,
});
