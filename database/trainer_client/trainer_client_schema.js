import mongoose from "mongoose";

const TrainerClientSchema = mongoose.Schema(
    {
        clientId: String,
        clientUserName: String,
        trainerId: String,
        trainerUserName: String
    },
    {collection: "trainerClient"}
)

export default TrainerClientSchema;