import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password_hash: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('User', UserSchema);
