import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct
} from "../../controlers/productController.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductsById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;