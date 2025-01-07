import FetchAccountById from "@/modules/accounts/FetchAccountById";
import CheckSession from "@/modules/session/CheckSession";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") return res.status(403).send("Unauthorized");

    const session = await CheckSession(req, res)
    if(!session) return res.status(200).json({ status: 404, message: "Not logged in." })

    const user = await FetchAccountById(Number(session.userId));
    if(!user) return res.status(200).json({ status: 404, message: "Not logged in." })

    // @ts-expect-error
    delete user.password
    // @ts-expect-error
    delete user.otpToken

    return res.status(200).json({ status: 200, message: user })
}