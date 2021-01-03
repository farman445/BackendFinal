var express = require("express");
var router = express.Router();
var Product = require("../models/Course");
/* GET home page. */
router.get("/showProducts", async function (req, res) {
  let products = await Product.find();
  res.json(products);
});

router.post("/store", async function (req, res) {
  let product = new Product();
  product.prCategory = req.body.prCategory;
  product.prName = req.body.prName;
  product.prPrice = req.body.prPrice;
  product.prDetails = req.body.prDetails;
  await product.save();
  res.json(product);
});

module.exports = router;
