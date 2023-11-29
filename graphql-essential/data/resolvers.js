import { Widgets } from "./dbConnector";

const resolvers = {
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDataBase[id] = input;
    return new Product(id, input);
  },
  getProduct: ({ id }) => {
    return new Promise((resolve) => {
      Widgets.findById({ _id: id }).then((err, products) => {
        if (err) reject(err);
        else resolve(products);
      });
    });
  },
  getProducts: () => {
    return new Promise((resolve) => {
      Widgets.findAll().then((err, products) => {
        if (err) reject(err);
        else resolve(products);
      });
    });
  },
};

export default resolvers;
