import prisma from "@/lib/prisma";
import pageSchema from "@/modules/schemas/docs/page";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized.")
    
    const response = pageSchema.safeParse(req.query)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { page, category } = response.data

    const documentationPage = await prisma.documentation.findFirst({ where: { key: page, category } })
    if(!documentationPage) return res.status(200).json({ status: 404, message: "Unknown page." })

    return res.status(200).json({ status: 200, message: documentationPage })
}