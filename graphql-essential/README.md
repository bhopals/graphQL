### GraphQL Essential

#### GraphQL Overview

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

#### Setup

- Install VS Code Extension - GraphQL (From GraphQL Foundation)
- Init Package JSON (`npm init`)
- Install Express server and GraphQL (`npm i express express-graphql graphql nodemon`)
- Install Dev Dependencies - babel (`npm i save-dev @babel/cli @babel/core @babel/node @babel/preset-env`)
- Create/Init BabelRC and IndexJS (`.bablerc`, `index.js`)
- Update `.bablerc` - Add Preset details
- Update `index.js` - Sample Express server code
- Update `package.json` - Add `start` script to run nodemon server using index.js (`nodemon ./index.js --exec babel-node -e js`)
