import bcrypt from "bcrypt";

import * as UserDao from "../database/users/user-dao.js";

const SALTROUNDS = 15;

const AuthController = (app) => {
  app.post("/api/auth/signup", signup);
  app.post("/api/auth/login", login);
  app.post("/api/auth/profile", profile);
  app.post("/api/auth/logout", logout);
};

const signup = async (req, res) => {
  const newUser = req.body;

  // Hash the PW before entering into DB
  const userPW = newUser.password;
  const hash = await bcrypt.hash(userPW, SALTROUNDS);
  newUser.password = hash;

  // Find out if user already exists
  const existingUser = await UserDao.findUserByUsername(req.body.username);

  if (existingUser) {
    res.sendStatus(403);
    return;
  }

  const insertedUser = await UserDao.createUser(newUser);

  // Clear the pw before storing in the session
  insertedUser.password = "****";
  req.session["profile"] = insertedUser;
  res.json(insertedUser);
};

const login = async (req, res) => {
  const user = req.body;
  const username = user.username;
  const password = user.password;

  const existingUser = await UserDao.findUserByUsername(username);
  if (!existingUser) {
    res.sendStatus(404);
  } else {
    const match = await bcrypt.compare(password, existingUser.password);

    if (match) {
      existingUser.password = "****";
      req.session["profile"] = existingUser;
      console.log("Setting in login",req.session["profile"]);
      res.json(existingUser);
      // Wrong Password
    } else {
      res.sendStatus(403);
    }
  }
};

const profile = (req, res) => {
  console.log("Get in profile",req.session["profile"]);
  res.json(req.session["profile"]);
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

export default AuthController;
