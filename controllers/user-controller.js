import * as UserDao from "../database/users/user-dao.js";

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.get("/api/users/email/:email", findUserByEmail);
    app.post("/api/users/credentials/:username/:password", findUserByCredentials);

    app.post("/api/users", createUser);
    app.put("/api/users/:id", updateUser);
    app.delete("/api/users/:id", deleteUser);
}

const findAllUsers = async (req, res) => {
    const users = await UserDao.findAllUsers();
    res.json(users);
}

const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await UserDao.findUserById(userId);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
    
}

const findUserByEmail = async (req, res) => {
    const userEmail = req.params.email;
    const user = await UserDao.findUserByEmail(userEmail);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

const findUserByCredentials = async (req, res) => {
    const creds = req.body;
    const {email, password} = credentials;

    const user = await UserDao.findUserByCredentials(email, password);

    if (user) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    const insertedUser = await UserDao.createUser(user);
    req.json(insertedUser);

}
const updateUser = async (req, res) => {
    const user = req.body;
    const userId = req.params.id;
    const status = await UserDao.updateUser(userId, user);
    res.json(status);
};
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const status = await UserDao.deleteUser(userId);
    res.json(status)
};

export default userController;