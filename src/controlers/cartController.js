import cartServices from "../services/cartServices.js";
import productServices from "../services/productServices.js";

export async function getCart(req, res) {
  try {
    const userId = req.user.id;
    const cart = await cartServices.getCartByUserId(userId);
    console.log(JSON.stringify(cart.products, null, 2));

    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function addProduct(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.body.id;
    const quantity = req.body.quantity || 1;

    console.log("🧾 Agregando producto al carrito:", {
      userId,
      productId,
      quantity,
    });//Prueba a ver si envia lo solicitado
    console.log("👉 req.body:", req.body);


    await cartServices.addProductToCart(userId, productId, quantity);

    const products = await productServices.getProducts();
    const message = "Producto agregado";
    res.render("product/productList", { products, message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function removeProduct(req, res) {
  try {
    const userId = req.user.id;
    const { productId } = req.params;
    await cartServices.removeProductFromCart(userId, productId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function clearCart(req, res) {
  try {
    const userId = req.user.id;
    await cartServices.clearCart(userId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};