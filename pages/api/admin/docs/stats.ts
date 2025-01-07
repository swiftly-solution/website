import prisma from "@/lib/prisma";
import CountAccounts from "@/modules/accounts/CountAccounts";
import CountSessions from "@/modules/session/CountSessions";
import SessionIsAdmin from "@/modules/session/SessionIsAdmin";
import { DocsStats } from "@/modules/types/admin/docs/Stats";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized.")
    if(!(await SessionIsAdmin(req, res))) return res.status(403).send("Unauthorized.")
    
    const data: DocsStats = {
        pages: (await prisma.documentation.count()),
        users: (await CountAccounts()),
        sessions: (await CountSessions())
    }

    return res.status(200).json({ status: 200, message: data })
}