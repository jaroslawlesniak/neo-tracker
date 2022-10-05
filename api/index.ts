import './aliases';

import { ApolloServer } from "apollo-server-express";
import Schema from "./src/Schema";
import Resolvers from "./src/Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

import { config } from 'dotenv';

async function startApolloServer(schema: any, resolvers: any) {
  config();
  
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3001 }, resolve)
  );

  console.log(`Server ready at port ${server.graphqlPath}`);
}

startApolloServer(Schema, Resolvers);
