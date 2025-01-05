import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import InvalidateUserSessions from "../session/InvalidateUserSessions";

export default async (user: User) => {
    try {
        await prisma.user.delete({ where: { id: user.id } });
        await InvalidateUserSessions(user)

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}