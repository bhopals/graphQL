class Product {
  constructor(id, props) {
    this.id = id;
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.soldout = props.soldout;
    this.inventory = props.inventory;
    this.stores = props.stores;
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
