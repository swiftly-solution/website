import FetchAccount from "@/modules/accounts/FetchAccount";
import loginSchema from "@/modules/schemas/auth/login";
import CreateSession from "@/modules/session/CreateSession";
import FetchIP from "@/modules/utils/FetchIP";
import { compareSync } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");

    const response = loginSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { email, password } = response.data

    const user = await FetchAccount(email)
    if(user == null) return res.status(200).json({ status: 404, message: "No user was found." })
    
    if(!compareSync(password, String(user.password))) return res.status(200).json({ status: 404, message: "Incorrect password." })

    await CreateSession(user, FetchIP(req), String(req.headers["user-agent"]), req, res)

    return res.status(200).json({ status: 200, message: "You've succesfully logged in. Please wait a second..." })
}