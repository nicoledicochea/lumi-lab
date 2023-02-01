const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  SKU: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
    require: true,
  },
  amountInStock: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  reorderAt: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);