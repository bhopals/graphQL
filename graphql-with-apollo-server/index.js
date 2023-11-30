const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    totalDays: Int!
  }
`;

const resolvers = {};

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen().then(({ url }) => console.log(`Server Running at ${url}`));
