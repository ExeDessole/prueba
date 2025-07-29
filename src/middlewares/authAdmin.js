export function authorizeAdmin(req, res, next) {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "No autenticado" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Acceso denegado: solo para administradores" });
    }

    next();
  } catch (error) {
    console.error("Error en middleware authorizeAdmin:", error);
    return res.status(500).json({ message: "Error del servidor" });
  }
};