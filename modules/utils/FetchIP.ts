import { NextApiRequest } from "next";

export default function (request: NextApiRequest): string {
    return String(request.headers['cf-connecting-ip'])
}