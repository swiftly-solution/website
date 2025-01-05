import prisma from "@/lib/prisma";

export default async (uuid: string, email: string, filterByEmail?: boolean) => {
    const data = await prisma.forgotPassword.count({
        where: {
            uuid: filterByEmail ? { not: "" } : uuid,
            email,
            used: false,
            timestamp: {
                gte: (new Date())
            }
        },
    })

    return data > 0
}