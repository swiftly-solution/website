import prisma from '@/lib/prisma'
import { Session, User } from '@prisma/client'
import { randomBytes } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next'
import { sign } from 'jsonwebtoken'

export default async (user: User, ip: string, user_agent: string, req: NextApiRequest, res: NextApiResponse): Promise<Session> => {
    const sessionToken = randomBytes(48).toString('base64');

    const session = await prisma.session.create({
        data: {
            token: sessionToken,
            ip: ip,
            userAgent: user_agent,
            userId: user.id
        }
    })

    const signedCookie = sign({ userId: user.id, token: sessionToken }, String(process.env.AUTH_SECRET), { expiresIn: "6h" })

    setCookie("session_token", signedCookie, { req, res, maxAge: 3600 * 6, path: "/" })

    return session;
}