import dotenv from "dotenv";
import connectDB from "./app/db/config.js";
import app from "./app/index.js";
import initializeData from "./app/scripts/initializeData.js";

dotenv.config();

const startServer = async () => {
  const PORT = process.env.PORT || 4000;

  try {
    await connectDB();
    console.log("Database connected successfully");

    await initializeData();

    app.listen(PORT, () =>
      console.log(
        `Server Connected: Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
      )
    );
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
};

startServer();
