import express from "express";
import { RESPONSE_MESSAGES } from "../constants/responseMessages.js";
import getStandings from "../controllers/standingsController.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const standings = await getStandings(req, res, next);

    if (!standings || standings.length === 0) {
      console.log("No standings found");
      return res.status(404).json({
        success: false,
        message: RESPONSE_MESSAGES.NO_RECORDS_FOUND.replace("records", "standings"),
      });
    }

    res.status(200).json(standings);
  } catch (err) {
    next(err);
  }
});

export default router;
