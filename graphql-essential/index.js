import express from "express";
import { graphqlHTTP } from "express-graphql";
// Type Definition - Query, Type, Mutation, input
import schema from "./data/schema";
// Resolvers - Functions that returns data
import resolvers from "./data/resolvers";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

const root = resolvers;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
