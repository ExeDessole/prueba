import cartDAO from "../repository/DAOS/mongo/cartDAO.js";

const cartServices = {
  async getCart(userId) {
    return await cartDAO.getCartByUserId(userId);
  },
  async createCart(userId) {
    return await cartDAO.createCart(userId);
  },
  async addProduct(userId, productId, quantity = 1) {
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
  }
};

export default cartServices;