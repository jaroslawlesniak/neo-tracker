import { ApolloClient, InMemoryCache } from '@apollo/client';

import { API_URL } from '~env';
console.log(API_URL);
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
