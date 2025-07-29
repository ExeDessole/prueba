import { Router } from "express";
import {
  getCart,
  addProduct,
  removeProduct,
  clearCart
} from "../../controlers/cartController.js";
import { authorizeUser } from "../../middlewares/authUser.js"

const cartRouter = Router();

cartRouter.get("/", authorizeUser, getCart);
cartRouter.post("/add", authorizeUser, addProduct);
cartRouter.delete("/remove/:productId", authorizeUser, removeProduct);
cartRouter.delete("/clear", authorizeUser, clearCart);

export default cartRouter;