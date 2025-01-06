import prisma from "@/lib/prisma"

export default async (username: string) => {
    return await prisma.user.findFirst({
        where: {
            username
        }
    })
}