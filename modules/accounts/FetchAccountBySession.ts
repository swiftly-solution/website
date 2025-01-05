import prisma from "@/lib/prisma"
import { Session } from "@prisma/client"

export default async (session: Session) => {
    return await prisma.user.findFirst({
        where: {
            id: session.userId
        }
    })
}