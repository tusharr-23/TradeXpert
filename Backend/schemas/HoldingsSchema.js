// const { Schema } = require("mongoose");

// const HoldingsSchema = new Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });

// module.exports = { HoldingsSchema };

const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  avg: {
    type: Number,
    required: true,
  },
});

module.exports = { HoldingsSchema };
