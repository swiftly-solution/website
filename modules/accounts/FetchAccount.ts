import prisma from "@/lib/prisma"

export default async (email: string) => {
    return await prisma.user.findFirst({
        where: {
            email: email
        }
    })
}