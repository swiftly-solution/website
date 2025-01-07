import prisma from "@/lib/prisma"

export default async (email: string, uuid: string) => {
    return await prisma.forgotPassword.findFirst({
        where: {
            email,
            uuid,
            used: false
        }
    })
}