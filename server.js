import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});