import mongoose from 'mongoose';

const MealPlanSchema = mongoose.Schema(
  {
    nutritionistId: { type: String, required: true, unique: true },
    nutritionistName: { type: String },
    name: { type: String, required: true },
    foods: [
      {
        foodName: String,
        portionSize: Number,
        unitOfMeasure: String,
      },
    ],
  },
  { collection: "mealPlans" }
);

export default MealPlanSchema;