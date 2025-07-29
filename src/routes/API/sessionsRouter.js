import { Router } from "express";
import passport from "passport";
import { generateToken } from "../../utils.js";

const sessionsRouter = Router();

// LOGIN
sessionsRouter.post("/login", (req, res, next) => {
  passport.authenticate("login", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Error interno de autenticación" });
    }

    if (!user) {
      console.warn("⚠️ Usuario no autenticado:", info?.message);
      return res.status(401).json({ error: info?.message || "Autenticación fallida" });
    }

    const token = generateToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000 // 1 hora
    });

    return res.redirect("/profile");
  })(req, res, next);
});

// REGISTER
sessionsRouter.post("/register", (req, res, next) => {
  passport.authenticate("register", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Error interno de registro" });
    }

    if (!user) {
      return res.status(400).json({ error: info?.message || "Registro fallido" });
    }

    const token = generateToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });

    return res.redirect("/profile");
  })(req, res, next);
});

// LOGOUT (borra cookie)
sessionsRouter.post("/logout", (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.redirect("/login");
  } catch (error) {
    return res.status(500).json({ error: "No se pudo cerrar sesión" });
  }
});

export default sessionsRouter;