import { Documentation } from "@prisma/client";

export default async function searchDocumentation(data: Documentation[], query?: string): Promise<Documentation[]> {
    if(!query) return data.slice(0,20)
    if(query == "") return data.slice(0,20)

    const lcQuery = query.toLowerCase();
    
    let matches = data.filter((v) => v.title.toLowerCase().includes(lcQuery)).slice(0,20)
    if(matches.length >= 20) return matches;

    matches = matches.concat(data.filter((v) => v.content.toLowerCase().includes(lcQuery)));
    const filterKeys = new Set();
    return matches.filter((el) => !filterKeys.has(el.key) && filterKeys.add(el.key)).slice(0,20)
}