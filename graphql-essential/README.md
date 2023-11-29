## GraphQL Essential

### GraphQL Overview

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

- A Query Language for API's
- Enables Declarative Data Fetching
- Exposes single endpoint and respond to Queries
- Can be used in Greenfield Projects(new projects), Legacy Projects, OR Hybrid Type (Greenfield + Legacy)
- GraphQL can be used to unify existing systems and hide complexity of data fetching logic
- Compelling use case for companies with legacy Infrastructures and many different API's
- To be able to make GraphQL Queries, we need to define SCHEMA which defines the Query Type
  and a Resolver for each API Endpoint.
- Here Type definition provides what type of Data we Expects and Resolver gets the data for us.

- GraphQL Schema

  - Schema serves as contract between Client and Server
  - Defines capabalities of the API by specifying how a Client fetch and update data
  - Represents contract between Client and Server
  - Collection of GRAPHQL Types with special ROOT Types
  - ROOT TYPES
    - Defines the entry point for the API
    - Root Types can be QUERY, MUTATION, and SUBSCRIPTION

- A More efficient Alternative to REST

  - Increased mobile usage creates need for efficient data loading
  - Variety of different frontend frameworks and platforms on the client-side
  - Fast development speed and expectation for rapid feature development
  - Send queries and Mutations directly without constructing HTTP Requests

- SECURITY

  - timeout
  - maximum query depth
  - query complexity
  - throttling

- Challanges
  - Server side caching
  - Protection against Complex Queries (if timeout and query depth protection is not in place)

### Setup

- Install VS Code Extension - GraphQL (From GraphQL Foundation)
- Init Package JSON (`npm init`)
- Install Express server and GraphQL (`npm i express express-graphql graphql nodemon`)
- Install Dev Dependencies - babel (`npm i save-dev @babel/cli @babel/core @babel/node @babel/preset-env`)
- Create/Init BabelRC and IndexJS (`.bablerc`, `index.js`)
- Update `.bablerc` - Add Preset details
- Update `index.js` - Sample Express server code
- Update `package.json` - Add `start` script to run nodemon server using index.js (`nodemon ./index.js --exec babel-node -e js`)
- Define Scehma, Resolver and Querytype for each API Endpoint
- Example:

  - Scehma:
    `type Product {
    id: ID,
    name: String,
    description: String,
    price: Float,
    soldout: Boolean,
}`

  - Resolver:
    `product: () => {
    return {
    id: "121212",
    name: "widget",
    description: "Beautiful Widget to render",
    price: 150.32,
    soldout: false,
    };
}`

  - Query Example:
    `query {
    product {
        name
        price
    }
}`

### GraphQL Types and Schemas

- Object Types and Fields

        - Type - Shape of the Object
        - Example Sample Query

        `query {
        product {
            id,
            name,
            description,
            price,
            soldout,
            stores {
            store
            }
        }
        }`

- Query and Mutation Types

  - Query - Query Type is responsible for defining what will return when we make a query (GET Operation)
  - Mutation - Updating/Creating Data
    - If you have an API endpoint that alters data, like inserting data into a database or altering data already in a database, you should make this endpoint a Mutation rather than a Query. This is as simple as making the API endpoint part of the top-level Mutation type instead of the top-level Query type.
  - Schemas are only meant for Query Definition

- Why `input` type when we already have type <name-of-the-type> definition

  - You don't need anything more than this to implement mutations. But in many cases, you will find a number of different mutations that all accept the same input parameters. A common example is that creating an object in a database and updating an object in a database often take the same parameters. To make your schema simpler, you can use “input types” for this, by using the input keyword instead of the type keyword.

  - Example:
    input MessageInput {
    content: String
    author: String
    }

    type Message {
    id: ID!
    content: String
    author: String
    }

    type Query {
    getMessage(id: ID!): Message
    }

    type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
    }

  - More - https://graphql.org/graphql-js/mutations-and-input-types/

  - Example Query / Mutation

    - mutation {
      createProduct(input: {
      name: "widgetw34323",
      description: "Test Desc3333",
      price: 34.55,
      soldout: false,
      inventory: 3,
      stores: [{store: "Welland"}, {store: "New york"}]
      }) {
      id,
      name,
      price,
      inventory
      }
      }

      query {
      getProduct(id: "b47e75c2562df5141385") {
      id,
      name,
      inventory
      }
      }

- What is the Resolver and its ROLE

  - Both mutations and queries can be handled by root resolvers, so the root that implements the schema
  - Resolvers are the functions that responds to queries and mutation
  - They are the functions that gives is the result of the Query

- Scalar Types (Basic Types)

  - Int
  - Float
  - String
  - Boolean

- Enumeration Types (Enum)
  - Special scalar types that allows you to define a specific set of data
