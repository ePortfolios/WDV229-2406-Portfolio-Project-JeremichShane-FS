import express from "express";
import { RESPONSE_MESSAGES } from "../constants/responseMessages.js";
import articleRoutes from "./articleRoutes.js";
import combinedFixtureRoutes from "./combinedFixtureRoutes.js";
import fixtureRoutes from "./fixtureRoutes.js";
import standingsRoutes from "./standingsRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: RESPONSE_MESSAGES.REQUEST_DETAILS(req) });
});

router.use("/articles", articleRoutes);
router.use("/standings", standingsRoutes);
router.use("/fixtures", fixtureRoutes);
router.use("/combined-fixtures", combinedFixtureRoutes);

export default router;
