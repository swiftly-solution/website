import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { hashSync } from 'bcrypt'

export default async (user: User, password: string) => {
    const hashedPassword = hashSync(password, 10)
    await prisma.user.update({ data: { password: hashedPassword }, where: { id: user.id } })
}