import ticketServices from "../services/ticketServices.js";

export async function checkout(req, res) {
  try {
    const userId = req.user._id;
    const ticket = await ticketServices.checkout(userId);
    res.status(201).render("ticket/ticket", { ticket });
  } catch (error) {
    res.status(500).render("auth/failed", { error: error.message });
  }
};

export async function getAllTickets(req, res) {
  try {
    const tickets = await ticketServices.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};