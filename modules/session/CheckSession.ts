import { getCookie } from "cookies-next";
import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import FindSession from "./FindSession";
import FetchIP from "../utils/FetchIP";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sessionCookie = await getCookie("session_token", { req, res })

    try {
        var data = verify(String(sessionCookie), String(process.env.AUTH_SECRET))

        // @ts-expect-error
        return (await FindSession(data.token, data.userId, FetchIP(req)))
    } catch(err) {
        return null;
    }
}