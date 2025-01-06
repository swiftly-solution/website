import CreateAccount from "@/modules/accounts/CreateAccount";
import FetchAccount from "@/modules/accounts/FetchAccount";
import FetchAccountByUsername from "@/modules/accounts/FetchAccountByUsername";
import UpdatePassword from "@/modules/accounts/UpdatePassword";
import signupSchema from "@/modules/schemas/auth/signup";
import CreateSession from "@/modules/session/CreateSession";
import FetchIP from "@/modules/utils/FetchIP";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");

    const response = signupSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { email, password, confirmpassword, username } = response.data

    if((await FetchAccount(email)) != null) return res.status(200).json({ status: 403, message: "There is already an account with this email address." })
    if((await FetchAccountByUsername(username)) != null) return res.status(200).json({ status: 403, message: "There is already an account with this username." })
    if(password != confirmpassword) return res.status(200).json({ status: 403, message: "The passwords need to match." })
        
    const user = await CreateAccount(username, email)
    
    await UpdatePassword(user, password)
    await CreateSession(user, FetchIP(req), String(req.headers["user-agent"]), req, res)

    return res.status(200).json({ status: 200, message: "You've succesfully signed up. Please wait a second..." })
}