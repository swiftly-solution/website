import prisma from "@/lib/prisma";
import { Session } from "@prisma/client";

export default async (session: Session) => {
    await prisma.session.deleteMany({
        where: {
            userId: session.userId,
            token: {
                not: session.token
            }
        }
    })
}