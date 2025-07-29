class UserPayload {
  constructor(user) {
    this.id = user._id;
    this.email = user.email;
    this.role = user.role || "user";
  }
};

export default UserPayload;