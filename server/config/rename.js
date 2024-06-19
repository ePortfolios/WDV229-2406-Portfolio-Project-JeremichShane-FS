import { existsSync, renameSync } from "fs";

if (!existsSync("./.env")) {
  renameSync("./.env.sample", "./.env");
  console.log("Successfully renamed .env.sample to .env");
}
