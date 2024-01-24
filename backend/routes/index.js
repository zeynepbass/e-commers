const express = require("express");
const router = express.Router();


const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const authRoute = require("./Auth.js");
const couponRoute = require("./Coupons.js");
const userRoute=require("./users.js");
router.use("/users", userRoute);
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute); 
router.use("/coupons", couponRoute);


module.exports = router;