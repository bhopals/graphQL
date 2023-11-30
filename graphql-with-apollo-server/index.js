const { ApolloServer, gql } = require("apollo-server");

const typeDef = gql`
  type Query {
    totalDays: Int!
  }
`;

const resolvers = {};

const server = new ApolloServer({ typeDef, mocks: true });

server.listen().then(({ url }) => console.log(`Server Running at ${url}`));
