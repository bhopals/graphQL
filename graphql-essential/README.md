### GraphQL Essential

#### GraphQL Overview

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

#### Setup

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
