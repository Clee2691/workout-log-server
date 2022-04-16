import mongoose from "mongoose";
import TrainerClientSchema from "./trainer_client_schema.js";

const TrainerClientModel = mongoose.model("TrainerClientModel", TrainerClientSchema);

export default TrainerClientModel;