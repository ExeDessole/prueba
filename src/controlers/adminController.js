import adminServices from "../services/adminServices.js";

// Crear nuevo usuario
export async function createUser(req, res) {
  try {
    const newUser = await adminServices.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Crear nuevo admin
export async function createAdmin(req, res) {
  try {
    const newAdmin = await adminServices.createAdmin(req.body);
    
    if (!email || !password) {
    return res.status(400).json({ error: "Email y password son obligatorios" });
  }
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los usuarios
export async function getAllUsers(req, res) {
  try {
    const users = await adminServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los administradores
export async function getAllAdmins(req, res) {
  try {
    const admins = await adminServices.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener usuario por ID
export async function getUserById(req, res) {
  try {
    const user = await adminServices.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener admin por ID
export async function getAdminById(req, res) {
  try {
    const admin = await adminServices.getAdminById(req.params.id);
    if (!admin) return res.status(404).json({ error: "Administrador no encontrado" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario
export async function updateUserById(req, res) {
  try {
    const updatedUser = await adminServices.updateUserById(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar admin
export async function updateAdminById(req, res) {
  try {
    const updatedAdmin = await adminServices.updateAdminById(req.params.id, req.body);
    if (!updatedAdmin) return res.status(404).json({ error: "Administrador no encontrado" });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar usuario
export async function deleteUserById(req, res) {
  try {
    const deletedUser = await adminServices.deleteUserById(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json({ message: "Usuario eliminado correctamente", user: deletedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar admin
export async function deleteAdminById(req, res) {
  try {
    const deletedAdmin = await adminServices.deleteAdminById(req.params.id);
    if (!deletedAdmin) return res.status(404).json({ error: "Administrador no encontrado" });
    res.status(200).json({ message: "Administrador eliminado correctamente", admin: deletedAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};