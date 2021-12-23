const connectDB = require("./config/connectDB");
const product = require("./data/product");
const Product = require("./Models/Product");
const User = require("./Models/User");
const mongoose = require("mongoose");
const users = require("./data/users");
const Order = require("./Models/Order");
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    const Createdusers = await User.insertMany(users);
    const isAdmin = Createdusers[0]._id;
    const sampleProduct = product.map((product) => {
      return { ...product, user: isAdmin };
    });
    const createProduct = await Product.insertMany(sampleProduct);
    console.log("data is send");
  } catch (error) {
    console.log("problem");
    console.error(error.message);
  }
};
const desctroyData = async () => {
  try {
    await Order.remove();
    await Product.remove();
    await User.remove();
  } catch (error) {
    console.error(error.message);
  }
};

if (process.argv[2] === "-d") {
  desctroyData();
} else {
  importData();
}
