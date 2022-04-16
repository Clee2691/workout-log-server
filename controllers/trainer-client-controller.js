import * as TrainerClientDao from "../database/trainer_client/trainer_client_dao.js";

const TrainerClientController = (app) => {
  app.get("/api/client-trainer/client/:clientId", getClientTrainers);
  app.get("/api/client-trainer/trainer/:trainerId", getTrainersClients);
  app.get("/api/client-trainer/:clientId/:trainerId", getExistingRelation);
  app.post("/api/client-trainer", createClientTrainerRelation);
  app.delete("/api/client-trainer/:relationId", deleteRelation);
};

const getClientTrainers = async (req, res) => {
  const { clientId } = req.params;
  const allTrainers = await TrainerClientDao.findClientsTrainers(clientId);
  res.json(allTrainers);
};

const getTrainersClients = async (req, res) => {
  const { trainerId } = req.params;
  const allClients = await TrainerClientDao.findTrainersClients(trainerId);
  res.json(allClients);
};

const getExistingRelation = async (req, res) => {
  const { clientId, trainerId } = req.params;
  const existingRelation = await TrainerClientDao.findExistingRelation(
    clientId,
    trainerId
  );
  res.json(existingRelation);
};

const createClientTrainerRelation = async (req, res) => {
  const relation = req.body;
  const existing = await TrainerClientDao.findExistingRelation(
    relation.clientId,
    relation.trainerId
  );
  
  if (existing) {
    res.sendStatus(403);
    return;
  }
  const insertedRelation = await TrainerClientDao.createClientTrainerRelation(
    relation
  );
  res.json(insertedRelation);
};

const deleteRelation = async (req, res) => {
  const { relationId } = req.params;
  const status = await TrainerClientDao.deleteClientTrainerRelation(relationId);
  res.send(status);
};

export default TrainerClientController;
