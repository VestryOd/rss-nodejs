const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    login: { type: String, required: true, unique: true },
    password: String
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
