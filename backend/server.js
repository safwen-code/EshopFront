const express = require("express");
const connectDB = require("./config/connectDB");
const product = require("./routes/product");
const app = express();

app.use("/products", product);

const port = process.env.PORT || 5000;
connectDB();

app.listen(port, () => {
  console.log(`server is work in ${port}`);
});
