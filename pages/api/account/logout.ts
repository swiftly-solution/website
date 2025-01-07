import CheckSession from "@/modules/session/CheckSession";
import InvalidateSession from "@/modules/session/InvalidateSession";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") return res.status(403).send("Unauthorized.");

    const session = await CheckSession(req, res);
    if (session) await InvalidateSession(session)
    return res.status(200).json({ status: 200, message: "logout" })
}