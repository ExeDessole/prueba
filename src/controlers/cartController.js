import cartServices from "../services/cartServices.js";

export async function getCart(req, res) {
  try {
    const userId = req.user.id;
    const cart = await cartServices.getCart(userId);
    if(!cart)
    res.render("product/cart", { cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.id;
    const quantity = req.body.quantity || 1;

    console.log("🧾 Agregando producto al carrito:", {
      userId,
      productId,
      quantity,
    });

    await cartServices.addProduct(userId, productId, quantity);
    res.redirect("/cart");//Quitar y agragar boton "Carrito" en views de productList
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const userId = req.user.id;
    const { productId } = req.params;
    await cartServices.removeProduct(userId, productId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function clearCart(req, res) {
  try {
    const userId = req.user.id;
    await cartServices.clear(userId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};