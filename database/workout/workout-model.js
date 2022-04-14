import mongoose from "mongoose";
import WorkoutSchema from "./workout-schema.js";

const WorkoutModel = mongoose.model("WorkoutModel", WorkoutSchema);

export default WorkoutModel;
