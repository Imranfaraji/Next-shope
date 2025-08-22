import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  details: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
