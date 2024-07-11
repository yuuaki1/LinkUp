import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_Env !== 'production'){
    globalThis.prisma = client
}

export default client;