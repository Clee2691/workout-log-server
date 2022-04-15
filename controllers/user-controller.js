import * as UserDao from "../database/users/user-dao.js";

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/userId/:uid", findUserById);
  app.get("/api/users/email/:email", findUserByEmail);

  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:id", deleteUser);
};

const findAllUsers = async (req, res) => {
  const users = await UserDao.findAllUsers();
  users.forEach(user => {
    user.email = "";
    user.password = "";
    user.sensitiveInfo = {};
    user.userStats = {};
  });
  res.json(users);
};

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await UserDao.findUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const findUserByEmail = async (req, res) => {
  const userEmail = req.params.email;
  const user = await UserDao.findUserByEmail(userEmail);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const updateUser = async (req, res) => {
  const user = req.body;
  const uid = req.params.userId;
  const status = await UserDao.updateUser(uid, user);
  // Set the session to new update user
  const existingUser = await UserDao.findUserById(uid);
  existingUser.password = "****";
  req.session["profile"] = existingUser;
  res.send(status);
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const status = await UserDao.deleteUser(userId);
  res.send(status);
};

export default userController;
