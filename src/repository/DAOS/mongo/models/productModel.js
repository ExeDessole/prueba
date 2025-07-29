import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: Number,
  category: String,
  images: String,
  status: { type: String, default: "active" }
  }, {
// COMO OPCIÓN genera fechas de creación y modificación
  timestamps: true 
});

const productModel = mongoose.model("Product", productSchema);
export default productModel;