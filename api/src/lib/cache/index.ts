import { AstronomyPictureOfDay, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Collection = {
  astronomyPictureOfDay: AstronomyPictureOfDay;
};

type Request = {
  collection: keyof Collection;
  predicate: Partial<Collection[keyof Collection]>;
};

export const cacheableRequest = async <T, Q>(
  request: Request,
  resolver: () => Promise<Q>,
  mapper: (data: Q) => Partial<T>
) => {
  const { collection, predicate } = request;

  const storaged = await prisma[collection].findFirst({
    where: predicate,
  });

  if (storaged) {
    return storaged;
  } 

  const response = await resolver();

  const data = await prisma[collection].create({
    data: mapper(response),
  });

  return data;
};
