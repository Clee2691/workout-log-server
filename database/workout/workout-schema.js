import mongoose from "mongoose";

const WorkoutSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    exerciseName: { type: String, required: true },
    exDate: String,
    sets: [
      {
        setNum: Number,
        weight: Number,
        reps: Number,
      }
    ]
  },
  { collection: "workout" }
);

export default WorkoutSchema;
