import mongoose from "mongoose";
import MealPlanSchema from "./mealPlan-schema.js";

const MealPlanModel = mongoose.model("MealPlanModel", MealPlanSchema);

export default MealPlanModel;
