import MealPlanModel from "./mealPlan-model.js";

export const findAllMealPlans = () => MealPlanModel.find();

export const findAllMealPlansByUID = (userId) =>
  MealPlanModel.find({ userId }).sort({ _id: -1 });

export const createNewMealPlan = (mealPlan) => MealPlanModel.create(mealPlan);

export const deleteMealPlan = (planId) =>
  MealPlanModel.deleteOne({ _id: planId });
