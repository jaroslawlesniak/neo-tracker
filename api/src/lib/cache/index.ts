/**
 * To avoid many requests we are caching NASA API responses inside database.
 * If predictate does not find data in DB then fetcher download resource from NASA API.
 * Parser maps response to Database object
 * 
 * @param predicate - function for feching existing data from database
 * @param fetcher - function for fecthing external resource
 * @param parser - function for mapping respone to in database object
 * 
 * @returns cached resource
 */
export const withCache = async <T, Q>(
  predicate: () => Promise<T>,
  fetcher: () => Promise<Q>,
  parser: (data: Q) => Promise<T>
) => predicate().then((cached) => (cached ? cached : fetcher().then(parser)));
