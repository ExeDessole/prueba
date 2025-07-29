import cartServices from "../services/cartServices.js";

export async function getCart(req, res) {
  try {
    const userId = req.user._id;
    const cart = await cartServices.getCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function addProduct(req, res) {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const cart = await cartServices.addProduct(userId, productId, quantity);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function removeProduct(req, res) {
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const cart = await cartServices.removeProduct(userId, productId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function clearCart(req, res) {
  try {
    const userId = req.user._id;
    const cart = await cartServices.clear(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};