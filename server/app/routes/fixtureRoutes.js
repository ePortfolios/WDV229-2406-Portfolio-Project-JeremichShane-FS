import express from "express";
import { getAllFixtures, getFixturesForWeek } from "../controllers/fixtureController.js";
import combinedFixtureRoutes from "./combinedFixtureRoutes.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { last, next } = req.query;
    let type = "all";
    let num = undefined;

    if (last && next) {
      return res.status(400).send("Please specify either 'last' or 'next', not both.");
    }

    if (last) {
      type = "last";
      num = parseInt(last, 10);
    } else if (next) {
      type = "next";
      num = parseInt(next, 10);
    }

    const fixtures = await getAllFixtures(num, type);
    res.json(fixtures);
  } catch (err) {
    next(err);
  }
});

router.use("/combined-fixtures", combinedFixtureRoutes);

router.get("/week", async (req, res, next) => {
  try {
    const { weekOffset } = req.query;
    const offset = parseInt(weekOffset, 10) || 0;
    const fixtures = await getFixturesForWeek(offset);
    res.json(fixtures);
  } catch (err) {
    next(err);
  }
});

export default router;
