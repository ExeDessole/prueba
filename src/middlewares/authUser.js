export function authorizeUser(req, res, next) {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "No autenticado" });
    }

    if (user.role !== "user") {
      return res.status(403).json({ message: "Acceso denegado: solo para usuarios" });
    }

    next();
  } catch (error) {
    console.error("Error en middleware authorizeUser:", error);
    return res.status(500).json({ message: "Error del servidor" });
  }
};
