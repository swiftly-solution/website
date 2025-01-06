import prisma from "@/lib/prisma"

export default async (username: string, email: string) => {
    return await prisma.user.create({
        data: {
            username,
            email
        }
    })
}