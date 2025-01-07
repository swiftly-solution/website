import FetchAccount from "@/modules/accounts/FetchAccount";
import CheckForgotPassword from "@/modules/accounts/forgotPassword/CheckForgotPassword";
import CreateForgotPassword from "@/modules/accounts/forgotPassword/CreateForgotPassword";
import SendMail from "@/modules/mails/SendMail";
import forgotPasswordSchema from "@/modules/schemas/auth/forgot";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");

    const response = forgotPasswordSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { email } = response.data

    const user = await FetchAccount(email)
    if(user == null) return res.status(200).json({ status: 404, message: "No user was found." })

    if((await CheckForgotPassword("", email, true)) == true) return res.status(200).json({ status: 403, message: "A reset password request has been already sent." })

    const forgotObject = await CreateForgotPassword(user)
    await SendMail(email, "Forgot Password", "You have received this email because you requested a <b>password reset</b>.<br>This password reset link will expire in 30 minutes.<br>{button} If you did not request this, you can ignore this email.<br><br><b>Best regards,<br>Swiftly Solution</b", { link: `/auth/reset/${forgotObject.uuid}/${encodeURIComponent(forgotObject.email)}`, message: "Reset Password" }, []);

    return res.status(200).json({ status: 200, message: "You've succesfully created a reset password request." })
}