import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';

import AuthController from './controllers/auth-controller.js';
import userController from './controllers/user-controller.js';
import workoutController from './controllers/workout-controller.js';
import ReviewController from './controllers/recipe-review-controller.js';
import workoutPlanController from './controllers/workoutPlan-controller.js';
import mealPlanController from './controllers/mealPlan-controller.js';

const PORT = process.env.PORT || 4000

const app = express();

mongoose.connect('mongodb://localhost:27017/workout-web-app-db')

app.use(express.json());
app.use(cors({
    credentials: true, // Using credentials needs to whitelist domain
    origin: 'http://localhost:3000'
}));

let sess = {
    secret: "SOMESECRETKEY",
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: true
}

if (process.env.ENV === 'production') {
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
}

app.use(session(sess));

AuthController(app);
userController(app);
workoutController(app);
ReviewController(app);
workoutPlanController(app);
mealPlanController(app);

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});