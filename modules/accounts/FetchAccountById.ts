import prisma from "@/lib/prisma"

export default async (id: number) => {
    return await prisma.user.findFirst({
        where: {
            id
        }
    })
}