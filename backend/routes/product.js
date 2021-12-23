const express = require("express");
const asyncHandler = require("express-async-handler");
const route = express.Router();
const Product = require("../Models/Product");
//get all product
route.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//get product by id
route.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ msg: "nom product found" });
    }
  })
);

module.exports = route;
