// https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express Accessed 23 Jan, 2022
// 

import { config as dotenv } from 'dotenv'
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import path from 'path'
import fs from 'fs'
import resolvers from './resolvers/index.js'
import { startDB } from './db.js';

dotenv()
const __dirname = path.resolve();

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  // DB
  await startDB()
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  const port = process.env.PORT || 4000
  await new Promise(resolve => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

/*fs.readdirSync(path.join(__dirname + '/src')).forEach(file => {
  console.log(file);
});*/

try {
  const typeDefs = fs.readFileSync(path.join(__dirname + '/src/schema.graphql'), 'utf-8')
  startApolloServer(typeDefs, resolvers)
} catch (error) {
  console.log(error)
}