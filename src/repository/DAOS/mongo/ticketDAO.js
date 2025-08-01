import ticketModel from "./models/ticketModel.js";

const ticketDAO = {

  async createTicket(data) {
    return await ticketModel.create(data);
  },

  async getTicketByCode(code) {
    return await ticketModel
      .findOne({ code })
      .populate({
        path: "products.product",
        select: "name price images category"
      })
      .populate({
        path: "purchaser",
        select: "name email"
      });
  },

  async getAllTickets() {
    return await ticketModel
      .find()
      .populate({
        path: "products.product",
        select: "name price images category"
      })
      .populate({
        path: "purchaser",
        select: "name email"
      });
  }
};

export default ticketDAO;