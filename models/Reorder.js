const mongoose = require("mongoose");

const ReorderSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  amountInStock: {
    type: String,
    require: true,
  },
  SKU: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  amountInStock: {
    type: String,
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

module.exports = mongoose.model("Reorder", ReorderSchema);