const { Schema } = require("mongoose");

const OrderssSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrderssSchema };
