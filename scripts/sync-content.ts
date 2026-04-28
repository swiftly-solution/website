import { sync, type DocumentRecord } from 'typesense-fumadocs-adapter';
import { Client } from 'typesense';
import 'dotenv/config'
import { readFileSync } from 'node:fs';

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
