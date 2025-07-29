import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Esquema de usuario
const adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "admin"
  },
  superAdmin: {
    type: Boolean,
    default: false,
  }
});

// Middleware para hashear contraseña antes de guardar
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
adminSchema.methods.comparePassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

// Modelo
const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;