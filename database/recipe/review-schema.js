import mongoose from "mongoose";

const RecipeRevSchema = mongoose.Schema(
    {
       mealId: {type: String, required: true},
       starRating: Number,
       userId: {type: String, required: true},
       userName: {type: String, required: true},
       revString: {type: String, required: true},
       mealName: String,
       mealPic: String,
       revDate: String
    },
    {collection: "recipeRev"}
);

export default RecipeRevSchema;
