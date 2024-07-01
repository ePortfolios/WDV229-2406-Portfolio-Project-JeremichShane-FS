import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { fetchArticles, fetchFixtures, fetchStandings } from "../services/dataService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const initializationFlagPath = path.join(__dirname, "initializationDone.flag");

const initializeData = async () => {
  try {
    // Check if the initialization has already been done
    await fs.access(initializationFlagPath);
    console.log("Initialization already done.");
  } catch {
    // If the flag file does not exist, proceed with initialization
    console.log("Initializing data...");
    await fetchArticles();
    await fetchStandings();
    await fetchFixtures();
    // Create the flag file to indicate completion
    await fs.writeFile(
      initializationFlagPath,
      "Initialization done on " + new Date().toISOString()
    );
    console.log("Initialization completed and flag file created.");
  }
};

export default initializeData;
