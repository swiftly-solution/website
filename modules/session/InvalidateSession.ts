import prisma from "@/lib/prisma"
import { Session } from "@prisma/client"

export default async (session: Session) => {
    await prisma.session.delete({
        where: {
            id: session.id
        }
    })
}