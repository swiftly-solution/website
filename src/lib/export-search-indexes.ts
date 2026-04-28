import { source } from '@/lib/source';
import { findPath } from 'fumadocs-core/page-tree';
import type { DocumentRecord } from 'typesense-fumadocs-adapter';
import 'dotenv/config'

export async function exportSearchIndexes() {
    const results: DocumentRecord[] = [];

    function isBreadcrumbItem(item: unknown): item is string {
        return typeof item === 'string' && item.length > 0;
    }

    for (const page of source.getPages()) {
        let breadcrumbs: string[] | undefined;
        const pageTree = source.getPageTree(page.locale);
        const path = findPath(
            pageTree.children,
            (node) => node.type === 'page' && node.url === page.url,
        );
        const data = await page.data.load()

        if (path) {
            breadcrumbs = [];
            path.pop();
            if (isBreadcrumbItem(pageTree.name)) {
                breadcrumbs.push(pageTree.name);
            }
            for (const segment of path) {
                if (!isBreadcrumbItem(segment.name)) continue;
                breadcrumbs.push(segment.name);
            }
        }

        results.push({
            _id: page.url,
            structured: data.structuredData,
            url: page.url,
            title: page.data.title,
            description: page.data.description,
            breadcrumbs,
            locale: page.locale,
        });
    }

    return results;
}