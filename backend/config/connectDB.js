const mongoose = require("mongoose");
const defail = require("./default.json");

const connnectDB = async () => {
  try {
    const db = await mongoose.connect(defail.mogoUri);
    console.log("db is connect");
  } catch (error) {
    console.error(error.message);
    console.log("problem with mongoose");
  }
};

module.exports = connnectDB;
