import ticketDAO from "../repository/DAOS/mongo/ticketDAO.js";
import cartDAO from "../repository/DAOS/mongo/cartDAO.js";
import { v4 as uuidv4 } from "uuid";

const ticketServices = {
  async checkout(userId) {
    const cart = await cartDAO.getCartByUserId(userId);
    if (!cart || cart.products.length === 0) {
      throw new Error("El carrito está vacío");
    }

    // Calcular total
    let total = 0;
    for (const item of cart.products) {
      total += item.product.price * item.quantity;
    }

    const ticketData = {
      code: uuidv4(),
      amount: total,
      purchaser: userId,
      products: cart.products
    };

    const ticket = await ticketDAO.createTicket(ticketData);

    // Vaciar carrito
    await cartDAO.clearCart(userId);

    return ticket;
  },
  async getTicket(code) {
    return await ticketDAO.getTicketByCode(code);
  },
  async getAllTickets() {
    return await ticketDAO.getAllTickets();
  }
};

export default ticketServices;