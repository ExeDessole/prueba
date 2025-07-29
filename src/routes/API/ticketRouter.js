import { Router } from "express";
import { checkout, getAllTickets } from "../../controlers/ticketController.js";
import { authorizeUser } from "../../middlewares/authUser.js"

const ticketRouter = Router();

ticketRouter.post("/checkout", authorizeUser, checkout);
ticketRouter.get("/", authorizeUser, getAllTickets);

export default ticketRouter;