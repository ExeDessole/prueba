class RecoveryPayload {
  constructor(user) {
    this.id = user._id;
    this.email = user.email;
  }
};

export default RecoveryPayload;