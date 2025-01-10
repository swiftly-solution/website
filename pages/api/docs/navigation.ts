import prisma from "@/lib/prisma";
import pageSchema from "@/modules/schemas/docs/page";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized.")
    if(!req.query.category) return res.status(403).send("Unauthorized.")

    const documentations = await prisma.documentation.findMany({ select: { key: true, title: true, category: true, icon: true }, where: { category: String(req.query.category) } });

    return res.status(200).json({ status: 200, message: documentations })
}