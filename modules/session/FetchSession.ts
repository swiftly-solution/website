import prisma from "@/lib/prisma"

export default async (session_id: number) => {
    return await prisma.session.findFirst({
        where: {
            id: session_id
        }
    })
}