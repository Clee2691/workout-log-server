import mongoose from 'mongoose';
import RecipeRevSchema from './review-schema.js';

const RecipeReviewModel = mongoose.model("RecipeRevModel", RecipeRevSchema);

export default RecipeReviewModel;