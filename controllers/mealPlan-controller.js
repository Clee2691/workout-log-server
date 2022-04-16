import * as MealPlanDao from "../database/mealplan/mealPlan-dao.js";

export default (app) => {
  app.get("/api/mealplans", findAllMealPlans);
  app.get("/api/mealplans/nutritionist/:uid", findMealPlanByUid);
  app.delete("/api/mealplans/:wpid", deleteMealPlan);
  app.post("/api/mealplans", createMealPlan);
};

const findAllMealPlans = async (req, res) => {
  const allMealPlans = await MealPlanDao.findAllMealPlans();
  res.json(allMealPlans);
};

const findMealPlanByUid = async (req, res) => {
  const uid = req.params.uid;
  const nutriMealPlans = await MealPlanDao.findAllMealPlansByUID(uid);
  res.json(nutriMealPlans);
};

const deleteMealPlan = async (req, res) => {
  const { wpid } = req.params;
  const status = await MealPlanDao.deleteMealPlan(wpid);
  res.send(status);
};

const createMealPlan = async (req, res) => {
  const MealPlan = req.body;
  const insertedPlan = await MealPlanDao.createNewMealPlan(MealPlan);
  res.json(insertedPlan);
};