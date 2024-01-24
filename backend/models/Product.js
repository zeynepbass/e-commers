const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    text: { type: String, required: true },//yorum alanı begendım vs
    rating: { type: Number, required: true },//skor tuttum
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },//kullanıcı id vs. bılgılerını tuttum
  },
  { timestamps: true }
);
const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    reviews: [ReviewSchema], //yorumlar ile üstü ilişkilendirdim
    colors: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }],
    price: {
      current: { type: Number, required: true },//kuponlar
      discount: { type: Number }, //ürün indirimi verdim
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;