import adminModel from "./models/adminModel.js";
import userModel from "./models/userModel.js";

const adminDAO = {
  //Retorna todos los usuarios comunes
  getAllUsers() {
    return userModel.find().lean();
  },
  //Retorna todos los administradores
  getAllAdmins() {
    return adminModel.find().lean();
  },
  //Retorna un usuario común por ID
  getUserById(id) {
    return userModel.findById(id).lean();
  },
  //Retorna un administrador por ID
  getAdminById(id) {
    return adminModel.findById(id).lean();
  },
  //Crea un nuevo usuario
  createUser(data) {
    return userModel.create(data);
  },
  //Crea un nuevo administrador
  createAdmin(data) {
    return adminModel.create(data);
  },
  //Actualiza usuario común por ID
  updateUserById(id, data) {
    return userModel.findByIdAndUpdate(id, data, { new: true, lean: true });
  },
  //Actualiza administrador por ID
  updateAdminById(id, data) {
    return adminModel.findByIdAndUpdate(id, data, { new: true, lean: true });
  },
  //Elimina usuario común por ID
  deleteUserById(id) {
    return userModel.findByIdAndDelete(id);
  },
  //Elimina administrador por ID
  deleteAdminById(id) {
    return adminModel.findByIdAndDelete(id);
  }
};

export default adminDAO;