import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from "lodash";
import casual from "casual"; // To Create Fake Data

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:widgets", {
  useNewUrlParser: true,
});

const widgetSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  soldout: {
    type: String,
  },
  inventory: {
    type: String,
  },
  stores: {
    type: Array,
  },
});

const Widgets = mongoose.model("widgets", widgetSchema);

// SQLite
const sequelize = new Sequelize("sqlite::memory");
const Categories = sequelize.define("categories", {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});
Categories.sync({
  force: true,
}).then(() => {
  _.times(5, (i) =>
    Categories.create({
      category: casual.word,
      description: casual.sentence,
    })
  );
});

export { Widgets, Categories };
