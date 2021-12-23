const mongoose = require("mongoose");
const schema = mongoose.Schema;
const reviewsSchema = schema({
  name: { type: String },
  rating: { type: Number },
  comment: { type: String },
});
const ProductSchema = schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    dscription: {
      type: String,
    },
    reviews: [reviewsSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = Product = mongoose.model("Product", ProductSchema);
