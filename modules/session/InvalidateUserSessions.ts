import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export default async (user: User) => {
    await prisma.session.deleteMany({
        where: {
            userId: user.id
        }
    })
}