import WorkoutPlanModel from "./workoutPlan-model.js";

export const findAllWorkoutPlans = () => 
  WorkoutPlanModel.find();

export const findAllWorkoutsPlansByUID = (userId) =>
  WorkoutPlanModel.find({ trainerId: userId }).sort({ _id: -1 });

export const createNewWorkoutPlan = (workoutPlan) =>
  WorkoutPlanModel.create(workoutPlan);

export const deleteWorkoutPlan = (planId) =>
  WorkoutPlanModel.deleteOne({ _id: planId });