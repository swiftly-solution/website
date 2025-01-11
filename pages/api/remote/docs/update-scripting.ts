import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Later add Cloudflare Ban
    if(req.method != "POST") return res.status(403).send("Unauthorized.")
    const authToken = (req.headers.authorization || '').split("Bearer ").at(1)
    if(authToken != process.env.AUTH_REMOTE_TOKEN) return res.status(403).send("Unauthorized.")

    const { pages, metadata } = req.body

    const scriptingPages = await prisma.documentation.findMany({ where: { category: "plugin", key: { startsWith: `scripting.` } } })
    const ids = scriptingPages.map((v) => v.id)
    await prisma.documentation.deleteMany({ where: { id: { in: ids } } })

    const pagesObject = []
    for(const page of Object.keys(pages)) {
        pagesObject.push({
            category: "plugin",
            content: pages[page],
            icon: metadata[page].icon,
            key: `scripting.${page}`,
            title: metadata[page].title
        })
    }

    await prisma.documentation.createMany({ data: pagesObject })

    return res.status(200).json({ status: 200, message: "updated" })
}