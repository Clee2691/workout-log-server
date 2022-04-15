import mongoose from "mongoose";
import WorkoutPlanSchema from "./workoutPlan-schema.js";

const WorkoutPlanModel = mongoose.model("WorkoutPlanModel", WorkoutPlanSchema);

export default WorkoutPlanModel;
