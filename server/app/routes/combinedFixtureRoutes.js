import express from "express";
import { RESPONSE_MESSAGES } from "../constants/responseMessages.js";
import { getCombinedFixtures } from "../services/dataService.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const combinedFixtures = await getCombinedFixtures();

    if (!combinedFixtures || combinedFixtures.length === 0) {
      return res.status(404).json({
        success: false,
        message: RESPONSE_MESSAGES.NO_RECORDS_FOUND.replace("records", "fixtures"),
      });
    }

    res.status(200).json(combinedFixtures);
  } catch (err) {
    next(err);
  }
});

export default router;
