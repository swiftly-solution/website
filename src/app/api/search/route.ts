import { source } from '@/lib/source';
import { NextRequest } from 'next/server';
import type { SortedResult } from 'fumadocs-core/search';
import { readFileSync } from 'fs';

interface IndexedItem {
  id: string;
  url: string;
  type: 'page' | 'heading';
  title: string;
  searchContent: string;
  breadcrumbs: string[];
}

let searchIndex: IndexedItem[] | null = null;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // Remove special chars except spaces and hyphens
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/-+/g, '-')        // Collapse multiple hyphens
    .replace(/^-|-$/g, '');     // Trim hyphens from ends
}

function extractHeadings(content: string): Array<{ id: string; content: string }> {
  const headings: Array<{ id: string; content: string }> = [];
  const usedIds = new Map<string, number>();
  
  // Match markdown headings: ## or ### followed by text
  const regex = /^#{2,3}\s+(.+?)(?:\s*\{#([^}]+)\})?$/gm;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].replace(/`/g, '').trim();
    // Use custom ID if specified, otherwise generate slug
    let id = match[2] || slugify(text);
    
    // Ensure unique ID
    const baseId = id;
    const count = usedIds.get(baseId) ?? 0;
    if (count > 0) {
      id = `${baseId}-${count}`;
    }
    usedIds.set(baseId, count + 1);
    
    headings.push({ id, content: text });
  }
  
  return headings;
}

function getSearchIndex(): IndexedItem[] {
  if (!searchIndex) {
    console.log('[Search] Building lightweight index...');
    const items: IndexedItem[] = [];
    
    for (const page of source.getPages()) {
      const parts = page.url.split('/').filter(Boolean);
      const breadcrumbs = parts.slice(0, -1).map((p) => 
        p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' ')
      );
      
      items.push({
        id: page.url,
        url: page.url,
        type: 'page',
        title: page.data.title,
        searchContent: `${page.data.title} ${page.data.description ?? ''}`.toLowerCase(),
        breadcrumbs,
      });
      
      try {
        const content = readFileSync(page.absolutePath, 'utf-8');
        const headings = extractHeadings(content);
        
        for (const heading of headings) {
          items.push({
            id: `${page.url}#${heading.id}`,
            url: `${page.url}#${heading.id}`,
            type: 'heading',
            title: heading.content,
            searchContent: heading.content.toLowerCase(),
            breadcrumbs: [...breadcrumbs, page.data.title],
          });
        }
      } catch { }
    }
    
    searchIndex = items;
    console.log('[Search] Index built with', searchIndex.length, 'items');
  }
  return searchIndex;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query')?.toLowerCase().trim() ?? '';
  
  if (!query) {
    return Response.json([]);
  }
  
  const index = getSearchIndex();
  
  const results: SortedResult[] = index
    .filter((item) => item.searchContent.includes(query))
    .slice(0, 30)
    .map((item) => ({
      id: item.id,
      url: item.url,
      type: item.type,
      content: item.title,
      breadcrumbs: item.breadcrumbs,
    }));
  
  return Response.json(results);
}