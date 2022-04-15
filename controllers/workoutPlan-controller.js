import * as WorkoutPlanDao from "../database/workoutplan/workoutPlan-dao.js";

export default (app) => {
  app.get("/api/workoutplans", findAllWorkoutPlans);
  app.get("/api/workoutplans/trainer/:uid", findWorkoutPlanByUid);
  app.delete("/api/workoutplans/:wpid", deleteWorkoutPlan);
  app.post("/api/workoutplans", createWorkoutPlan);
};

const findAllWorkoutPlans = async (req, res) => {
  const allWorkoutPlans = await WorkoutPlanDao.findAllWorkoutPlans();
  res.json(allWorkoutPlans);
};

const findWorkoutPlanByUid = async (req, res) => {
  const uid = req.params.uid;
  const trainerWorkoutPlans = await WorkoutPlanDao.findAllWorkoutsPlansByUID(
    uid
  );
  res.json(trainerWorkoutPlans);
};

const deleteWorkoutPlan = async (req, res) => {
    const {wpid} = req.params;
    const status = await WorkoutPlanDao.deleteWorkoutPlan(wpid);
    res.send(status);
}

const createWorkoutPlan = async (req, res) => {
    const workoutPlan = req.body;
    const insertedPlan = await WorkoutPlanDao.createNewWorkoutPlan(workoutPlan);
    res.json(insertedPlan);
}