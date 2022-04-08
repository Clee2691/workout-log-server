import UserModel from "./user-model.js";

export const findAllUsers = () => UserModel.find();

export const findUserById = (userId) => UserModel.findById(userId);

export const findUserByUsername = (userName) =>
  UserModel.findOne({ username: userName });

export const findUserByEmail = (email) => UserModel.findOne({ email });

export const findUserByCredentials = (userName, password) =>
  UserModel.findOne({
    username: userName,
    password,
  });

export const createUser = (user) => UserModel.create(user);

export const deleteUser = (userId) => UserModel.deleteOne({ _id: userId });

export const updateUser = (uid, newUser) =>
  UserModel.updateOne({ _id: uid }, { $set: newUser });
