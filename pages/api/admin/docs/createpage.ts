import prisma from "@/lib/prisma";
import createPageSchema from "@/modules/schemas/admin/docs/createpage";
import SessionIsAdmin from "@/modules/session/SessionIsAdmin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");
    if(!(await SessionIsAdmin(req, res))) return res.status(403).send("Unauthorized.")

    const response = createPageSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { key, title, category, icon } = response.data

    await prisma.documentation.create({
        data: {
            key,
            title,
            category,
            icon: icon || "",
            content: ""
        }
    })

    return res.status(200).json({ status: 200, message: "You've succesfully created a new page." })
}