class Product {
  constructor(id, name, description, price, soldout, inventory, stores) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.inventory = inventory;
    this.stores = stores;
  }
}

const productDataBase = {};

const resolvers = {
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDataBase[id] = input;
    console.log("id>", id);
    console.log("input>", input);
    console.log("productDataBase>", productDataBase);

    return new Product(id, input);
  },
  getProduct: ({ id }) => {
    return new Product(id, productDataBase[id]);
  },
  //   getProducts: () => {
  //     return productDataBase;
  //   },
};

export default resolvers;
