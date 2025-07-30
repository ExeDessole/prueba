import cartModel from "./models/cartModel.js";

const cartDAO = {
  createCart(userId) {
    const cart = new cartModel({ user: userId, products: [] });
    return cart.save();
  },

  getCartByUserId(userId) {
    return cartModel.findOne({ user: userId }).populate("products.product");
  },

  addProductToCart(userId, productId, quantity) {
    return cartModel.findOneAndUpdate(
      { user: userId },
      { $push: { products: { product: productId, quantity } } },
      { new: true, upsert: true }
    );
  },

  updateProductQuantity(userId, productId, quantity) {
    return cartModel.findOneAndUpdate(
      { user: userId, "products.product": productId },
      { $set: { "products.$.quantity": quantity } },
      { new: true }
    );
  },

  removeProductFromCart(userId, productId) {
    return cartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { products: { product: productId } } },
      { new: true }
    );
  },

  clearCart(userId) {
    return cartModel.findOneAndUpdate(
      { user: userId },
      { $set: { products: [] } },
      { new: true }
    );
  },
};

export default cartDAO;

