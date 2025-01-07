import prisma from "@/lib/prisma";

export default async (): Promise<number> => {
    const sixHoursAgo = new Date();
    sixHoursAgo.setHours(sixHoursAgo.getHours() - 6);

    return await prisma.session.count({
        where: {
            createdAt: {
                gte: sixHoursAgo
            }
        }
    })
}