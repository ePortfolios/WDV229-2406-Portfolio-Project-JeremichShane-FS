import cors from "cors";
import express from "express";
import morgan from "morgan";
import { RESPONSE_MESSAGES } from "./constants/responseMessages.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1", (req, res) => {
  res.status(200).json({ success: true, message: RESPONSE_MESSAGES.REQUEST_DETAILS(req) });
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: RESPONSE_MESSAGES.REQUEST_DETAILS(req),
  });
});

app.use((req, res, next) => {
  const err = new Error(RESPONSE_MESSAGES.NEW_ERROR(req));
  res.status(404);
  next(err);
});

app.use((err, req, res, next) => {
  console.log(RESPONSE_MESSAGES.REQUEST_DETAILS_FAIL(req));
  if (res.headerSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    success: false,
    message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR(err),
  });
});

export default app;
