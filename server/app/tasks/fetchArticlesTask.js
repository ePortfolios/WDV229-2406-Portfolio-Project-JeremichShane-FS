import axios from "axios";
import cron from "node-cron";
import Article from "./models/Article.js";

cron.schedule("* * * * *", async () => {
  const res = await axios.get("http://external-api.com/api/v1/articles");
  const articles = res.data;

  for (const article of articles) {
    // Update database (simplified logic)
    await Article.updateOne({ id: article.id }, article, { upsert: true });
  }
});
