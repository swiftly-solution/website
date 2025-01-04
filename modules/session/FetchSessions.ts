import prisma from "@/lib/prisma";
import { Session } from "@prisma/client";

export default async (): Promise<Session[]> => {
    const sixHoursAgo = new Date();
    sixHoursAgo.setHours(sixHoursAgo.getHours() - 6);

    return await prisma.session.findMany({
        where: {
            createdAt: {
                gte: sixHoursAgo
            }
        }
    })
}