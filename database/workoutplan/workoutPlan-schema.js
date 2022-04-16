import mongoose from 'mongoose';

const WorkoutPlanSchema = mongoose.Schema(
  {
    trainerId: { type: String, required: true},
    trainerName: {type: String},
    name: {type: String, required: true},
    exercises: [
        {
            exName: String,
            exNumSets: Number,
            exNumReps: Number,
        }
    ]
  },
  { collection: "workoutPlans" }
);

export default WorkoutPlanSchema;