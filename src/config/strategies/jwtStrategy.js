import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import servicesUser from "../../services/userServices.js";

const { JWT_SECRET } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (req) => req.cookies?.jwt // Lee el JWT desde la cookie
  ]),
  secretOrKey: JWT_SECRET,
};

export const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await servicesUser.getUserById(payload.id);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});