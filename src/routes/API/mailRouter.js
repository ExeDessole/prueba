import { Router } from "express";
import mailController from "../../controlers/mailController.js";

const {
  renderRecoveryForm,
  sendRecoveryMail,
  renderResetForm,
  resetPassword
} = mailController;

const mailRouter = Router();

// Vista para pedir recuperación
mailRouter.get("/", renderRecoveryForm);

// Procesa el formulario de email y envía el link
mailRouter.post("/", sendRecoveryMail);

// Vista para ingresar nueva contraseña desde el link
mailRouter.get("/reset/:token", renderResetForm);

// Procesa el cambio de contraseña
mailRouter.post("/reset/:token", resetPassword);

export default mailRouter;