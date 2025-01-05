import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { v4 } from "uuid";

export default async (user: User) => {
    const uuid = v4()
    const timestamp = (new Date(Date.now() + 1800000))

    return await prisma.forgotPassword.create({
        data: {
            uuid,
            timestamp,
            email: user.email,
        }
    })
}