import adminDAO from "../repository/DAOS/mongo/adminDAO.js";

const adminServices = {
  async getAllUsers() {
    return await adminDAO.getAllUsers();
  },

  async getAllAdmins() {
    return await adminDAO.getAllAdmins();
  },

  async getUserById(id) {
    const user = await adminDAO.getUserById(id);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  },

  async getAdminById(id) {
    const admin = await adminDAO.getAdminById(id);
    if (!admin) throw new Error("Administrador no encontrado");
    return admin;
  },

  async createUser(data) {
    return await adminDAO.createUser(data);
  },

  async createAdmin(data) {
    return await adminDAO.createAdmin(data);
  },

  async updateUserById(id, data) {
    const userUpdated = await adminDAO.updateUserById(id, data);
    if (!userUpdated) throw new Error("Usuario no encontrado");
    return userUpdated;
  },

  async updateAdminById(id, data) {
    const adminUpdated = await adminDAO.updateAdminById(id, data);
    if (!adminUpdated) throw new Error("Administrador no encontrado");
    return adminUpdated;
  },

  async deleteUserById(id) {
    const userDeleted = await adminDAO.deleteUserById(id);
    if (!userDeleted) throw new Error("Usuario no encontrado");
    return userDeleted;
  },

  async deleteAdminById(id) {
    const adminDeleted = await adminDAO.deleteAdminById(id);
    if (!adminDeleted) throw new Error("Administrador no encontrado");
    return adminDeleted;
  }
};

export default adminServices;