import cartServices from "../services/cartServices.js";

export async function getCart(req, res) {
  try {
    const userId = req.user._id;
    const cart = await cartServices.getCart(userId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function addProduct(req, res) {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const quantity = req.params.quantity;
    console.log("🧾 Agregando producto al carrito:", {
  userId,
  productId,
  quantity
});

    const cart = await cartServices.addProduct(userId, productId, quantity);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function removeProduct(req, res) {
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const cart = await cartServices.removeProduct(userId, productId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function clearCart(req, res) {
  try {
    const userId = req.user._id;
    const cart = await cartServices.clear(userId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};