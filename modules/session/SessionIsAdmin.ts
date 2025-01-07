import { NextApiRequest, NextApiResponse } from "next";
import CheckSession from "./CheckSession";
import FetchAccountBySession from "../accounts/FetchAccountBySession";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await CheckSession(req, res)
    if(!session) return false;

    const account = await FetchAccountBySession(session)
    if(!account) return false;

    return account.admin
}