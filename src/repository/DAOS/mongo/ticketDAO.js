import ticketModel from "./models/ticketModel.js";

const ticketDAO = {
  async createTicket(data) {
    return await ticketModel.create(data);
  },
  async getTicketByCode(code) {
    return await ticketModel.findOne({ code }).populate("products.product").populate("purchaser");
  },
  async getAllTickets() {
    return await ticketModel.find().populate("products.product").populate("purchaser");
  }
};

export default ticketDAO;