import prisma from "@/lib/prisma"

export default async () => {
    return await prisma.user.findMany({});
}