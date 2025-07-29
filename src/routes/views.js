import { Router } from "express";
import passport from "passport";
import UserDTO from "../DTOs/userDTO.js";
import mailRouter from "./API/mailRouter.js";
import productServices from "../services/productServices.js";
import cartServices from "../services/cartServices.js";
import { authenticateToken } from "../middlewares/authToken.js";

const views = Router();

views.use("/recovery", mailRouter);

views.get("/", (req, res) => {
  res.render("index");
});

views.get("/login", (req, res) => {
  res.render("auth/login");
});

views.get("/register", (req, res) => {
  res.render("auth/register");
});

views.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const safeUser = new UserDTO(req.user);
    res.render("user/profile", { user: safeUser });
  }
);

views.get("/recovery", (req, res) => {
  res.render("recovery/reqReset");
});

views.get("/recovery/resetPassLink", (req, res) => {
  const { token } = req.query;
  res.render("recovery/resetPassLink", { token });
});

views.get("/products", async (req, res) => {
  const products = await productServices.getProducts();
  res.render("product/productList", { products });
});

views.get("/failed", (req, res) => {
  res.render("auth/failed");
});

views.get("/cart", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Nota: id, no _id (como viene del JWT)
    const cart = await cartServices.getCart(userId);
    res.render("product/cart", { cart });
  } catch (error) {
    console.error("❌ Error al renderizar carrito:", error);
    res.status(500).render("auth/failed", { error: error.message });
  }
});

export default views;