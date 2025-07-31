import cartDAO from "../repository/DAOS/mongo/cartDAO.js";

const cartServices = {
  async createCart(userId) {
    return await cartDAO.createCart(userId);
  },

  async getCartByUserId(userId) {
    return await cartDAO.getCartByUserId(userId);
  },

  async addProductToCart(userId, productId, quantity) {
    let cart = await cartDAO.getCartByUserId(userId);

    if (!cart) {
      await cartDAO.createCart(userId);
      const updatedCart = await cartDAO.addProductToCart(userId, productId, quantity);
      return {
        status: "created",
        message: "Carrito creado y producto agregado.",
        cart: updatedCart,
      };
    }

    const existingProduct = cart.products.find(
    (item) => item.product && item.product._id?.toString() === productId
    );


    if (existingProduct) {
      const newQuantity = existingProduct.quantity + Number(quantity);
      const updatedCart = await cartDAO.updateProductQuantity(userId, productId, newQuantity);
      return {
        status: "updated",
        message: "Cantidad del producto actualizada en el carrito.",
        cart: updatedCart,
      };
    }

    const updatedCart = await cartDAO.addProductToCart(userId, productId, quantity);
    return {
      status: "added",
      message: "Producto agregado al carrito.",
      productId,
      quantity,
      cart: updatedCart,
    };
  },

  async updateProductQuantity(userId, productId, quantity) {
    return await cartDAO.updateProductQuantity(userId, productId, quantity);
  },

  async removeProductFromCart(userId, productId) {
    return await cartDAO.removeProductFromCart(userId, productId);
  },

  async clearCart(userId) {
    return await cartDAO.clearCart(userId);
  },
};

export default cartServices;
