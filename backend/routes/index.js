const express = require("express");
const router = express.Router();


const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const authRoute = require("./Auth.js");
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);

module.exports = router;