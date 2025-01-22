import { Cache, LruCache, Prisma } from "cached-prisma";

export class PrismaCached extends Prisma {
    static override cacheFactory = (): Cache => new LruCache(Infinity);
}