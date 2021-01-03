const { text } = require("express");
var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
  prName: String,
  prCategory: String,
  prDetails: String,
  prPrice: Number,
  prDetails: String,
});

var Product = mongoose.model("Product", courseSchema);

module.exports = Product;
