import * as ReviewDao from "../database/recipe/review-dao.js";

const ReviewController = (app) => {
  app.get("/api/recipe/review", getAllReviews);
  app.get("/api/recipe/review/recent", findRecentReviews);
  app.get("/api/recipe/review/meal/:mealId", findReviewsMealId);
  app.get("/api/recipe/review/user/:uid", findRevsByUId);
  app.post("/api/recipe/review", createRecipeReview);
  app.delete("/api/recipe/review/:revId", deleteRecipeReview);
};

const getAllReviews = async (req, res) => {
  const allReviews = await ReviewDao.findAllReviews();
  res.json(allReviews);
}

const findRecentReviews = async (req, res) => {
  const recentReviews = await ReviewDao.findRecentReviews();
  res.json(recentReviews);
};

const findReviewsMealId = async (req, res) => {
  const mealId = req.params.mealId;
  const mealReviews = await ReviewDao.findAllRevByMealId(mealId);
  res.json(mealReviews);
};

const findRevsByUId = async (req, res) => {
  const uid = req.params.uid;
  const userReviews = await ReviewDao.findAllRevByUserId(uid);
  res.json(userReviews);
};

const createRecipeReview = async (req, res) => {
  const newReview = req.body;
  const foundReview = await ReviewDao.findRevByMealIdUserId(
    newReview.mealId,
    newReview.userId
  );

  if (foundReview) {
    res.sendStatus(403);
    return;
  }

  const insertedReview = await ReviewDao.createReview(newReview);
  res.json(insertedReview);
};

const deleteRecipeReview = async (req, res) => {
  const { revId } = req.params;
  const status = await ReviewDao.deleteReview(revId);
  res.send(status);
};

export default ReviewController;
