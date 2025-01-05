import prisma from "@/lib/prisma";
import { ForgotPassword } from "@prisma/client";

export default async (forgotPassword: ForgotPassword) => {
    await prisma.forgotPassword.update({
        data: {
            used: true
        }, where: {
            id: forgotPassword.id
        }
    })
}