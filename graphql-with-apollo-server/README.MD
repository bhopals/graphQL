- GraphQL server with Apollo Server

  - Init Project - `npm init`
  - Install `apollo server` - (`npm i graphql apollo-server nodemon`)
  - Apollo server takes TYPE DEF and RESOLVERS (an option to MOCK resolvers)
  - Init Apollo Server (index.js) - ` new ApolloServer({ typeDefs, mocks: true }).listen();`
  - Update npm script - npm start- `nodemon .`

- Scalar - To build custom scalar definitions for fields (Date, Email etc)

  ```
  scalar Date
  scalar Email
  ```

- SAMPLE QUERIES

```
query {
  totalDays
  allDays {
    id
    mountain
    date
  }
}

```

- SAMPLE MUTATIONS

```
mutation {
  removeDay(id: 3) {
    date,
    id,
    mountain
  }
}
```

- SAMPLE MUTATION WITH QUERIES

```
mutation {
  removeDay(id: 3) {
    date,
    id,
    mountain
  }
}{
  totalDays
  allDays {
    id
    mountain
    date
    conditions
  }
}
```

```
mutation {
  addDay(input: {
    date: "1/2/2019"
    mountain: "Alphine"
    conditions: ICE
  }) {
    id,
    mountain,
    conditions
  }
}
```

```
mutation {
  removeDay(id: "1234") {
    day {
      date
      mountain
    },
    removed
    totalBefore
    totalAfter
  }
}
```
