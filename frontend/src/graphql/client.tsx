// src/graphql/client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://your-graphql-server-url', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
