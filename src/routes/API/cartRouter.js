import { Router } from "express";
import {
  getCart,
  addProduct,
  removeProduct,
  clearCart,
} from "../../controlers/cartController.js";
import { authorizeUser } from "../../middlewares/authUser.js";
import { authenticateToken } from "../../middlewares/authToken.js";

const cartRouter = Router();

cartRouter.get("/", authenticateToken, authorizeUser, getCart);
cartRouter.post("/add/:productId", authenticateToken, authorizeUser, addProduct);
cartRouter.delete("/remove/:productId", authenticateToken, authorizeUser, removeProduct);
cartRouter.delete("/clear", authenticateToken, authorizeUser, clearCart);

export default cartRouter;