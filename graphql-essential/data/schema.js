import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldout: Soldout,
        inventory: Int,
        stores: [Store]
    }

    type Store {
        store: String
    }

    type Query {
        getProduct(id: ID): Product
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    input StoreInput {
        store: String
    }

    input ProductInput {
        name: String,
        description: String,
        price: Float,
        soldout: Soldout,
        inventory: Int,
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;
