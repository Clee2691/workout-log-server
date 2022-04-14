import * as WorkoutDao from "../database/workout/workout-dao.js"

export default (app) => {
  app.get("/api/workout/user/:userId", findAllWorkoutsByUserId);
  app.post("/api/workout", createWorkout);
  app.delete("/api/workout/:workoutId", deleteWorkout);
};

const findAllWorkoutsByUserId = async (req, res) => {
    const uid = req.params.userId;
    const allWorkouts = await WorkoutDao.findAllWorkoutsByUID(uid);
    res.json(allWorkouts)
}

const createWorkout = async (req, res) => {
    const newWorkout = req.body;
    const addedWorkout = await WorkoutDao.createNewWorkout(newWorkout);
    res.json(addedWorkout);
}

const deleteWorkout = async (req, res) => {
    const {workoutId} = req.params;
    const status = await WorkoutDao.deleteWorkout(workoutId);
    res.send(status);
}