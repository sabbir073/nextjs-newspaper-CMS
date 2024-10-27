// prisma/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
