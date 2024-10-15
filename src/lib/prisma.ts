import { PrismaClient } from "@prisma/client";

/* Este código se lo proporcionó Prisma a un usuario, para no estar iterando sobre varios PrismaClient, lo cual baja el rendimiento a tu aplicación */

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
