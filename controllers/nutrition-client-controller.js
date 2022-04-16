import * as NutritionClientDao from "../database/nutrition_client/nutrition_client_dao.js";

const NutritionClientController = (app) => {
  app.get("/api/client-nutrition/client/:clientId", getClientNutrition);
  app.get(
    "/api/client-nutrition/nutritionist/:nutritionistId",
    getNutritionClients
  );
  app.get("/api/client-nutrition/:clientId/:nutritionistId", getExistingRelation);
  app.post("/api/client-nutrition", createClientNutritionRelation);
  app.delete("/api/client-nutrition/:clientId/:nutritionistId", deleteRelation);
};

const getClientNutrition = async (req, res) => {
  const { clientId } = req.params;
  const allNutrition = await NutritionClientDao.findClientsNutrition(clientId);
  res.json(allNutrition);
};

const getNutritionClients = async (req, res) => {
  const { nutritionistId } = req.params;
  const allClients = await NutritionClientDao.findNutritionClients(
    nutritionistId
  );
  res.json(allClients);
};

const getExistingRelation = async (req, res) => {
  const { clientId, nutritionistId } = req.params;
  const existingRelation = await NutritionClientDao.findExistingRelation(
    clientId,
    nutritionistId
  );
  res.json(existingRelation);
};

const createClientNutritionRelation = async (req, res) => {
  const relation = req.body;
  const existing = await NutritionClientDao.findExistingRelation(
      relation.clientId,
      relation.nutritionistId
  )

  if (existing) {
      res.sendStatus(403);
      return;
  }

  const insertedRelation =
    await NutritionClientDao.createClientNutritionRelation(relation);
  res.json(insertedRelation);
};

const deleteRelation = async (req, res) => {
  const { clientId, nutritionistId } = req.params;
  const status = await NutritionClientDao.deleteClientNutritionRelation(
    clientId,
    nutritionistId
  );
  res.send(status);
};

export default NutritionClientController;
