const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    checked: {
      type: Boolean,
      default: true,
    },
    item: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const todoList = mongoose.model("TodoApp", todoSchema);
module.exports = todoList;
