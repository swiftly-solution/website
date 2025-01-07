import prisma from "@/lib/prisma";
import SessionIsAdmin from "@/modules/session/SessionIsAdmin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized.")
    if(!(await SessionIsAdmin(req, res))) return res.status(403).send("Unauthorized.")

    return res.status(200).json({ status: 200, message: (await prisma.documentation.findMany()) })
}