import * as ReviewDao from "../database/recipe/review-dao.js";

const ReviewController = (app) => {
  app.post("/api/recipe/review", createRecipeReview);
  app.get("/api/recipe/review/:mealId", findReviewsMealId);
  app.delete("/api/recipe/review/:revId", deleteRecipeReview);
};

const findReviewsMealId = async (req, res) => {
  const mealId = req.params.mealId;
  const mealReviews = await ReviewDao.findAllRevByMealId(mealId);

  res.json(mealReviews);
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
    const {revId} = req.params;
    const status = await ReviewDao.deleteReview(revId);
    res.send(status);
}

export default ReviewController;
