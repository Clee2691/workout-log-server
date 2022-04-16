import mongoose from "mongoose";
import NutritionClientSchema from "./nutrition_client_schema.js";

const NutritionClientModel = mongoose.model(
  "NutritionClientModel",
  NutritionClientSchema
);

export default NutritionClientModel;