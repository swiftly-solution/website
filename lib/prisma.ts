import { PrismaCached } from '@/modules/database/PrismaCached';
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = (new PrismaCached()).client;

export default prisma;