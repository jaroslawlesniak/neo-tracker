import { images, objects } from './services';

const Resolvers = {
  Query: {
    ...images.queries,
    ...objects.queries,
  },
  Mutation: {
    ...images.mutations,
  },
};

export default Resolvers;
