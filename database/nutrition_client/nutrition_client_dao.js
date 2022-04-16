import NutritionClientModel from "./nutrition_client_model.js";

export const findClientsNutrition = (clientId) =>
  NutritionClientModel.find({ clientId });

export const findNutritionClients = (nutritionistId) =>
  NutritionClientModel.find({ nutritionistId });

export const createClientNutritionRelation = (relationship) =>
  NutritionClientModel.create(relationship);

export const deleteClientNutritionRelation = (clientId, nutritionistId) => 
  NutritionClientModel.deleteOne({ clientId, nutritionistId });

  export const findExistingRelation = (clientId, nutritionistId) => 
  NutritionClientModel.findOne({clientId, nutritionistId});