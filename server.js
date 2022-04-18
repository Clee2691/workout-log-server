import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

import AuthController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";
import workoutController from "./controllers/workout-controller.js";
import ReviewController from "./controllers/recipe-review-controller.js";
import workoutPlanController from "./controllers/workoutPlan-controller.js";
import mealPlanController from "./controllers/mealPlan-controller.js";
import TrainerClientController from "./controllers/trainer-client-controller.js";
import NutritionClientController from "./controllers/nutrition-client-controller.js";

const PORT = process.env.PORT || 4000;

const MONGO_CONNECT =
  process.env.MONGO_DB_STRING || "mongodb://localhost:27017/workout-web-app-db";
const ORIGIN_STRING = process.env.CORS_ORIGIN || "http://localhost:3000";

const app = express();

mongoose.connect(MONGO_CONNECT);

app.use(express.json());
app.use(
  cors({
    credentials: true, // Using credentials needs to whitelist domain
    origin: ORIGIN_STRING,
  })
);

// let sess = {
//   secret: "SOMESECRETKEY",
//   cookie: {
//     secure: true,
//   },
//   resave: false,
//   saveUninitialized: true,
// };
// app.set("trust proxy", 1);
// app.use(session(sess));

app.set("trust proxy", 1);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "your secret text",
    name: "SomeCookieName",
    proxy: true,
    cookie: {
      secure: true,
      httpOnly: false,
      SameSite: 'none'
    },
  })
);

AuthController(app);
userController(app);
workoutController(app);
ReviewController(app);
workoutPlanController(app);
mealPlanController(app);
TrainerClientController(app);
NutritionClientController(app);

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
