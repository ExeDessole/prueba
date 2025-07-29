import { Router } from "express";
import {
  getAllUsers,
  getAllAdmins,
  getUserById,
  getAdminById,
  createUser,
  createAdmin,
  updateUserById,
  updateAdminById,
  deleteUserById,
  deleteAdminById
} from "../../controlers/adminController.js";
import { authorizeAdmin } from "../../middlewares/authAdmin.js";

const adminRouter = Router();
adminRouter.use(authorizeAdmin);

//TODOS LOS PERMISOS
//CRUD USUARIOS
adminRouter.get("/users", getAllUsers);
adminRouter.get("/users/:id", getUserById);
adminRouter.post("/users", createUser);
adminRouter.put("/users/:id", updateUserById);
adminRouter.delete("/users/:id", deleteUserById);

//CRUD ADMIN
adminRouter.get("/admins", getAllAdmins);
adminRouter.get("/admins/:id", getAdminById);
adminRouter.post("/admins", createAdmin);
adminRouter.put("/admins/:id", updateAdminById);
adminRouter.delete("/admins/:id", deleteAdminById);

export default adminRouter;