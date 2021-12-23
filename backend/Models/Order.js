const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OrderSchema = schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: [
      {
        name: { type: String },
        qty: { type: Number },
        image: { type: String },
        price: { type: String },
        product: { type: schema.Types.ObjectId, ref: "Product" },
      },
    ],
    shippingAdddress: {
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    textPrice: {
      type: Number,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = Order = mongoose.model("Order", OrderSchema);
