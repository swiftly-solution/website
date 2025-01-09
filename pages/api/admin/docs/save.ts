import prisma from "@/lib/prisma";
import updatePageSchema from "@/modules/schemas/admin/docs/updatepage";
import SessionIsAdmin from "@/modules/session/SessionIsAdmin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");
    if(!(await SessionIsAdmin(req, res))) return res.status(403).send("Unauthorized.")

    const response = updatePageSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { key, category, content } = response.data
    const page = await prisma.documentation.findFirst({ where: { key, category } })
    if(!page) return res.status(200).json({ status: 403, message: "Invalid page." })

    await prisma.documentation.update({
        data: {
            content
        },
        where: {
            id: page.id
        }
    })

    return res.status(200).json({ status: 200, message: "You've succesfully updated the page." })
}