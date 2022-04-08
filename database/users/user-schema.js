import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dateJoined: String,
    aboutUser: String,
    sensitiveInfo: {
      dateOfBirth: String,
      phoneNumber: String,
    },
    userStats: {
      weight: Number,
      height: Number,
    },
    userRole: {type: String, required: true}
  },
  { collection: "user" }
);

export default UserSchema;