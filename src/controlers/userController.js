import servicesUser from "../services/userServices.js";

export async function createUser(req, res) {
  try {
    const { first_name, last_name, email, password, age, role } = req.body;

    const existingUser = await servicesUser.findByEmail(email);
    if (existingUser) {
      return res.status(400).render("auth/failed", { error: "El email ya está en uso" });
    }

    const newUser = await servicesUser.createUser({
      first_name,
      last_name,
      age,
      email,
      password,
      age,
      role
    });

    res.status(201).render("user/profile", { user: newUser });

  } catch (error) {
    res.status(500).render("auth/failed", { error: error.message });
  }
};

export async function getUserProfile(req, res) {
  try {
    const userId = req.user._id;
    const user = await servicesUser.getUserById(userId);
    res.render("user/profile", { user });
  } catch (error) {
    res.status(404).render("auth/failed", { error: error.message });
  }
};


export async function updateUserProfile(req, res) {
  try {
    const userId = req.user._id;
    const updateData = req.body;
    const updatedUser = await servicesUser.updateUser(userId, updateData);
    res.status(200).render("user/profile", {updatedUser});
  } catch (error) {
    res.status(400).render("auth/failed", { error: error.message });
  }
};

export async function deleteUserAccount(req, res) {
  try {
    const userId = req.user._id;
    const deletedUser = await servicesUser.deleteUser(userId);
    res.status(200).json({
      message: "Usuario eliminado correctamente",
      deletedUser,
    });
  } catch (error) {
    res.status(400).render("auth/failed", { error: error.message });
  }
};
