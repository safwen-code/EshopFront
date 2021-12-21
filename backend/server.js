import express from "express";
import products from "./data/product.js";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json(products);
});
app.get("/product/:id", (req, res) => {
    console.log(req.params.id)
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
  console.log(product)
});
app.listen(port, () => {
  console.log(`server is work in ${port}`);
});
