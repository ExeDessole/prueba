import cartModel from "./models/cartModel.js";

const cartDAO = {
  createCart(userId) {
    return cartModel.create({ user: userId, products: [] });
  },
  getCartByUserId(userId) {
    return cartModel.findOne({ user: userId }).populate("products.product");
  },
  addProductToCart(userId, productId, quantity) {
    return cartModel.findOneAndUpdate(
      { user: userId, "products.product": { $ne: productId } },
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
      { products: [] },
      { new: true }
    );
  }
};

export default cartDAO;