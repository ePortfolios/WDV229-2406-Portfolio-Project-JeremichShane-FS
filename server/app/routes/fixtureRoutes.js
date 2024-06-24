import express from "express";
import { getAllFixtures } from "../controllers/fixtureController.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { last, next } = req.query;
    let type = "all";
    let num;

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

export default router;
