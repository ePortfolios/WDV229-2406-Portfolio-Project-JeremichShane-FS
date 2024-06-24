import express from "express";
import { RESPONSE_MESSAGES } from "../constants/responseMessages.js";
import getArticles from "../controllers/articleController.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const articles = await getArticles(req, res, next);

    if (!articles || articles.length === 0) {
      return res.status(404).json({
        success: false,
        message: RESPONSE_MESSAGES.NO_RECORDS_FOUND.replace("records", "articles"),
      });
    }

    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
});

export default router;
