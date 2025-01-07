import prisma from "@/lib/prisma"

export default async (token: string, userId: number, ip: string) => {
    const sixHoursAgo = new Date();
    sixHoursAgo.setHours(sixHoursAgo.getHours() - 6);

    return (await prisma.session.findFirst({
        where: {
            createdAt: {
                gte: sixHoursAgo
            },
            token,
            userId,
            ip
        }
    }))
}