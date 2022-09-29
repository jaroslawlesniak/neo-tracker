import { AstronomyPictureOfDay, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Collection = {
  astronomyPictureOfDay: AstronomyPictureOfDay;
}

type Request<T> = {
  collection: keyof Collection;
  predicate: Partial<T>;
}

export const cacheableRequest =
  async <T, Q>(request: Request<T>, resolver: () => Promise<Q>, mapper: (data: Q) => Partial<T>) => {
    const { collection, predicate } = request;

    const storage = await prisma[collection].findFirst({
      where: predicate
    });

    if (storage) {
      return storage;
    } else {
      const response = await resolver();

      const data = await prisma[collection].create({
        data: mapper(response),
      });

      return data;
    }
  };
