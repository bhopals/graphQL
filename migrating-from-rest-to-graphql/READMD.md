### Migrating from REST to GraphQL

- Why Use GRAPHQL?

  - Types Inspection
  - Query Multiple DBs from one GRAPHQL Server
  - Flexibility of the Queries

- GraphQL not Always IDEAL

  - More Code to setup
  - Small applications, stick to REST
  - Evaluate your scaling plans

- BENEFITS OF GRAPHQL

  - Single Round Trip - Query from multiple data sources in a single network request
  - Client-specified - Adapts to different requirements for different clients
  - Introspective - API Playground Client-Side validation Self-Documenting
  - Data fetching control
  - Using multiple data sources
  - Alleviating bandwidth concerns
  - Rapid prototyping

- WHEN TO GO FOR GRAPHQL?

  - WHEN YOU ARE DEVELOPING MOBILE APPS
  - WHEN YOU HAVE TO HANDLE COMPLEX SCHEMA
  - WHEN YOU WANT TO HIDE BACKEND COMPLEXITIES FROM CLIENT
  - WHEN YOU WANT BETTER DEVELOPING EXPERIENCE
  - WHEN YOUR APPLICATION RECEIVE DATA FROM MULTIPLE APIS

- WHEN TO AVOID GRAPHQL?

  - WHEN YOU ALREADY HAVE REST
  - WHEN YOU WANT AN EASY WAY OUT
  - WHEN YOU WANT TO USE WEB CACHE
    - Although you can achive a bit of it by using `persisted queries` with `PersistGraphQL`, but it is not full proof :(
  - WHEN PERFORMANCE IS YOUR PRIORITY
  - WHEN GRAPHQL SCHEMAS CAN CAUSE A PROBLEM

- REST API comes with some downsides. Here are some of the most common ones:

  - It fetches all data, whether required or not (“over-fetching”).
  - It makes multiple network requests to get multiple resources.
  - Sometimes resources are dependent, which causes waterfall network requests.

- WHY USE GRAPHQL

  - Strongly-typed Schema
  - No Over-Fetching or Under-Fetching
  - Saves Time and Bandwidth
  - Schema Stitching for Combining Schemas
  - Versioning Is Not Required
  - Transform Fields and Resolve With Required Shape

- When to Use GraphQL

  - GraphQL works best for the following scenarios:

    - Apps for devices such as mobile phones, smartwatches, and IoT devices, where bandwidth usage matters.
    - Applications where nested data needs to be fetched in a single call.
      For example, a blog or social networking platform where posts need to be fetched along with nested comments and commenters details.
    - Composite pattern, where application retrieves data from multiple, different storage APIs
      For example, a dashboard that fetches data from multiple sources such as logging services, backends for consumption stats, third-party analytics tools to capture end-user interactions.
    - Proxy pattern on client side; GraphQL can be added as an abstraction on an existing API,
      so that each end-user can specify response structure based on their needs.
      For example, clients can create a GraphQL specification according to their needs on common API provided by FireBase as a backend service.

- GraphQL levarages DSL (Domain specific Language)

- GraphQL Playground - https://snowtooth.moonhighway.com/
