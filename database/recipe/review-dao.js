import RecipeRevModel from "./review-model.js";

export const findAllReviews = () => RecipeRevModel.find().sort({ revDate: -1 });

export const findAllRevByMealId = (mealId) => RecipeRevModel.find({ mealId });

export const findAllRevByUserId = (userId) => RecipeRevModel.find({ userId });

export const findRevByMealIdUserId = (mealId, userId) => RecipeRevModel.findOne({mealId, userId});

export const createReview = (review) => RecipeRevModel.create(review);

export const deleteReview = (revId) =>
  RecipeRevModel.deleteOne({ _id: revId });

export const findRecentReviews = () => RecipeRevModel.find().sort({revDate: -1}).limit(5);
