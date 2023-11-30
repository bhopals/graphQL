const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  """
  Everything you write here will be the documentation
  """
  type SkiDay {
    """
    A Ski Day unique Identifier
    """
    id: ID!
    """
    A Ski Day date
    """
    date: String!
    """
    Location of Ski day
    """
    mountain: String!
    """
    A Ski Day conditions -  POWDER, HEAVY, ICE, THIN
    """
    conditions: Conditions!
  }

  enum Conditions {
    POWDER
    HEAVY
    ICE
    THIN
  }

  input AddDayInput {
    date: String!
    mountain: String!
    conditions: Conditions
  }

  type RemoveDayPayload {
    day: SkiDay!
    removed: Boolean
    totalBefore: Int
    totalAfter: Int
  }

  type Query {
    totalDays: Int!
    allDays: [SkiDay!]!
  }

  type Mutation {
    removeDay(id: ID): RemoveDayPayload!
    addDay(input: AddDayInput): SkiDay
  }

  type Subscription {
    newDay: SkiDay!
  }
`;

const mocks = {
  Date: () => "1/1/2015",
  String: () => "Cool Data",
  Query: () => ({
    allDays: () => new MockList([1, 5]),
  }),
};
const resolvers = {};

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen().then(({ url }) => console.log(`Server Running at ${url}`));
