import { existsSync, renameSync } from "fs";

// Rename .env.sample to .env in the server directory
if (!existsSync("./server/.env")) {
  renameSync("./server/.env.sample", "./server/.env");
  console.log("Successfully renamed .env.sample to .env in the server directory");
}

// Rename .env.sample to .env in the client directory
if (!existsSync("./client/.env")) {
  renameSync("./client/.env.sample", "./client/.env");
  console.log("Successfully renamed .env.sample to .env in the client directory");
}
