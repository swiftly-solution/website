import prisma from "@/lib/prisma";
import CountAccounts from "@/modules/accounts/CountAccounts";
import CountSessions from "@/modules/session/CountSessions";
import { DocsStats } from "@/modules/types/admin/docs/Stats";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const data: DocsStats = {
        pages: (await prisma.documentation.count()),
        users: (await CountAccounts()),
        sessions: (await CountSessions())
    }

    return res.status(200).json({ status: 200, message: data })
}