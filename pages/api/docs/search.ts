import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        responseLimit: false,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized.")

    return res.status(200).json(
        { 
            status: 200, 
            message: (await prisma.documentation.findMany({
                select: {
                    key: true,
                    content: true,
                    title: true,
                    category: true
                },
            })) 
        }
    )
}