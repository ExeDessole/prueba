import { Router } from "express";
import {
  createUser,
  getUserProfile,
} from "../../controlers/userController.js";
import { authorizeUser } from "../../middlewares/authUser.js";

const userRouter = Router();
userRouter.use(authorizeUser);

userRouter.post("/me", createUser)
userRouter.get("/me",  getUserProfile);

export default userRouter;