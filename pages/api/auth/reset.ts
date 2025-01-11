import FetchAccount from "@/modules/accounts/FetchAccount";
import CheckForgotPassword from "@/modules/accounts/forgotPassword/CheckForgotPassword";
import FetchForgotPassword from "@/modules/accounts/forgotPassword/FetchForgotPassword";
import InvalidateForgotPassword from "@/modules/accounts/forgotPassword/InvalidateForgotPassword";
import UpdatePassword from "@/modules/accounts/UpdatePassword";
import SendMail from "@/modules/mails/SendMail";
import resetSchema from "@/modules/schemas/auth/reset";
import { compareSync } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST") return res.status(403).send("Unauthorized");

    const response = resetSchema.safeParse(req.body)
    if(!response.success) return res.status(200).json({ status: 403, message: response.error.errors })

    const { email, uuid, confirmpassword, password } = response.data

    if(!(await CheckForgotPassword(uuid, email))) return res.status(200).json({ status: 403, message: "This reset password request has expired." })

    const user = await FetchAccount(email)
    if(user == null) return res.status(200).json({ status: 403, message: "User not found." })
    if(password != confirmpassword) return res.status(200).json({ status: 403, message: "The passwords need to match." })
    if(compareSync(password, String(user.password))) return res.status(200).json({ status: 403, message: "The password cannot be the same with the old one." })

    await UpdatePassword(user, password)

    const forgotPasswordObject = await FetchForgotPassword(email, uuid)
    await InvalidateForgotPassword(forgotPasswordObject!)

    await SendMail(email, "Reset Password", "You have received this email because your <b>password</b> has been reset.<br>If you did not request this, please contact us as soon as possible.<br>{button} <b>Best regards,<br>Swiftly Solution</b>", { link: `/auth/login`, message: "Authenticate" }, []);

    return res.status(200).json({ status: 200, message: "You've succesfully reset your password. Back to login..." })
}