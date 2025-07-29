import { Strategy } from "passport-local";
import servicesUser from "../../services/userServices.js";

async function verifyRegister(req, username, password, done) {
  try {
    const { first_name, last_name, age, role } = req.body;

    const userFound = await servicesUser.getUserByEmail(username);
    if (userFound) {
      return done(null, false, { message: "El usuario ya existe" });
    }

    const newUser = {
      first_name,
      last_name,
      email: username,
      age: Number(age),
      role: role || "user",
      password,
    };

    const savedUser = await servicesUser.createUser(newUser);
    return done(null, savedUser);
  } catch (error) {
    return done("Internal server error");
  }
};

async function verifyLogin(username, password, done) {
  try {
    const user = await servicesUser.getUserByEmail( username );
    if (!user) return done(null, false, { message: "Usuario no encontrado" });

    const isValid = await user.comparePassword(password);
    if (!isValid) return done(null, false, { message: "Contraseña incorrecta" });

    return done(null, user); 
    } catch (error) {
      return done(error);
    }
};

export const registerLocal = new Strategy({usernameField: "email", passReqToCallback: true}, verifyRegister);
export const loginLocal = new Strategy({usernameField: "email"}, verifyLogin);