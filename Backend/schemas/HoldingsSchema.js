const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
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

  avg: {
    type: Number,
    required: true,
  },
});

// One user can have only one holding for a symbol,
// but different users can have the same symbol.
HoldingsSchema.index({ user: 1, symbol: 1 }, { unique: true });

module.exports = { HoldingsSchema };
