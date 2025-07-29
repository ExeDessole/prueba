import cartDAO from "../repository/DAOS/mongo/cartDAO.js";

const cartServices = {
  async getCart(userId) {
    return await cartDAO.getCartByUserId(userId);
  },
  async addProduct(userId, productId, quantity) {
    const cart = await cartDAO.getCartByUserId(userId);

    if (!cart) {
    await cartDAO.createCart(userId);
  }
    return await cartDAO.addProductToCart(userId, productId, quantity);
  },
  async updateQuantity(userId, productId, quantity) {
    return await cartDAO.updateProductQuantity(userId, productId, quantity);
  },
  async removeProduct(userId, productId) {
    return await cartDAO.removeProductFromCart(userId, productId);
  },
  async clear(userId) {
    return await cartDAO.clearCart(userId);
  },
};

export default cartServices;