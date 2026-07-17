const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  // symbol: String,
  // name: String,
  // qty: Number,
  // price: Number,
  // mode: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  symbol: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"],
  },
});

module.exports = { OrdersSchema };
