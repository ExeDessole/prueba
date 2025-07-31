import { Router } from "express";
import { checkout, getAllTickets } from "../../controlers/ticketController.js";
import { authorizeUser } from "../../middlewares/authUser.js"
import { authenticateToken } from "../../middlewares/authToken.js";

const ticketRouter = Router();

ticketRouter.post("/checkout", authenticateToken, authorizeUser, checkout);
ticketRouter.get("/allTickets", authenticateToken, authorizeUser, getAllTickets);

export default ticketRouter;