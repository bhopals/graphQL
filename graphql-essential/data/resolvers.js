import { Widgets } from "./dbConnector";

const resolvers = {
  createProduct: async ({ input }) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores,
    });
    newWidget.id = newWidget._id;
    try {
      await newWidget.save();
      return newWidget;
    } catch (error) {
      return err;
    }
  },

  updateProduct: async ({ input }) => {
    try {
      const response = await Widgets.findOneAndUpdate(
        { _id: input.id },
        input,
        {
          new: true,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  },

  getProduct: async ({ id }) => {
    try {
      return await Widgets.findById({ _id: id });
    } catch (error) {
      return error;
    }
  },
  getProducts: async () => {
    try {
      return await Widgets.findAll();
    } catch (error) {
      return error;
    }
  },
};

export default resolvers;
