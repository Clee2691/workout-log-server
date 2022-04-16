import TrainerClientModel from "./trainer_client_model.js";

export const findClientsTrainers = (clientId) =>
  TrainerClientModel.find({ clientId });

export const findTrainersClients = (trainerId) =>
  TrainerClientModel.find({ trainerId });

export const createClientTrainerRelation = (relationship) =>
  TrainerClientModel.create(relationship);

export const deleteClientTrainerRelation = (relationId) =>
  TrainerClientModel.deleteOne({ _id: relationId });

export const findExistingRelation = (clientId, trainerId) =>
  TrainerClientModel.findOne({ clientId, trainerId });
