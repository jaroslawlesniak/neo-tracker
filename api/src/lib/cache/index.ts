export const withCache = async <T, Q>(
  fetcher: () => Promise<Q>,
  predicate: () => Promise<T>,
  parser: (data: Q) => Promise<T>
) => {
  const data = await predicate();

  if (data) {
    return data;
  }

  const response = await fetcher();

  return parser(response);
  // const { collection, predicate } = request;

  // const storaged = await prisma[collection].findFirst({
  //   where: predicate,
  // });

  // if (storaged) {
  //   return storaged;
  // } 

  // const response = await fetcher();

  // const data = await prisma[collection].create({
  //   data: parser(response),
  // });

  // return data;
};
