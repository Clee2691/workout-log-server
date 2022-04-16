import mongoose from "mongoose";

const NutritionClientSchema = mongoose.Schema({
  clientId: String,
  clientUserName: String,
  nutritionistId: String,
  nutritionistUserName: String,
}, {collection:"nutritionClient"});

export default NutritionClientSchema;
