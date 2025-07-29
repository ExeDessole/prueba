import jwt from "jsonwebtoken";
import userModel from "./repository/DAOS/mongo/models/userModel.js";
import UserPayload from "./DTOs/userPayloadJWT.js";
import RecoveryPayload from "./DTOs/recoveryPayload.js";

const {JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD} = process.env;
//F: Generador de token
export const generateToken = (user) => {
  const payload = { ...new UserPayload(user) }; // Se convierte en json, para que pueda firmarse

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
};

//F: Generador de token para recupero de password
export const generateTokenRecovery = (user) => {
  const payload = { ...new RecoveryPayload(user) }; // Se convierte en json, para que pueda firmarse

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "15m",
  });
};

//F: Valida el token generado para recupero de password
export function validateToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Token inválido o expirado");
  }
};

//F: Crea un admin por default (creador del proyecto)
export async function createDefaultAdmin() {
  const existingAdmin = await userModel.findOne({ email: ADMIN_EMAIL });
  if (!existingAdmin) {
    await userModel.create({
      first_name: "Exequiel",
      last_name: "Dessole",
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      superAdmin: true
    });
    console.log("✅ Admin creado automáticamente");
  }
};