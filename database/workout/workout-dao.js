import WorkoutModel from "./workout-model.js";

export const findAllWorkoutsByUID = (userId) =>
  WorkoutModel.find({ userId }).sort({ _id : -1 });

export const createNewWorkout = (workout) => WorkoutModel.create(workout);

export const deleteWorkout = (workoutId) =>
  WorkoutModel.deleteOne({ _id: workoutId });
