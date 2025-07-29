import { validateToken } from "../utils.js";

export function authenticateToken(req, res, next) {
  const token = req.cookies?.jwt;

  if (!token) {
    return res.status(401).json({ message: "No autenticado: token faltante" });
  }

  try {
    const decoded = validateToken(token);
    req.user = decoded;
    console.log("✅ Usuario autenticado:", decoded);
    next();
  } catch (err) {
    console.error("❌ Token inválido:", err.message);
    return res.status(403).json({ message: err.message });
  }
};