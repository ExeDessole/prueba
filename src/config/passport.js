import passport from "passport";
import { registerLocal, loginLocal } from "./strategies/localStrategy.js";
import { jwtStrategy } from "./strategies/jwtStrategy.js";

const initializePassport = () => {
  passport.use("login", loginLocal);
  passport.use("register", registerLocal);
  passport.use("jwt", jwtStrategy);
};

export default initializePassport;