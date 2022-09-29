import people from "./dataset";

import objects from './services/objects';
import images from './services/images';

const Resolvers = {
  Query: {
    ...objects.queries,
    ...images.queries,
  },
  Mutation: {
    addPerson: (_: any, args: any) => null,
  }
};

export default Resolvers;
