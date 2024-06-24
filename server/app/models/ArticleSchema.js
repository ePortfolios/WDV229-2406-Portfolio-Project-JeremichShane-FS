import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  description: String,
  images: [Object],
  dataSourceIdentifier: String,
  published: Date,
  type: String,
  premium: Boolean,
  links: [Object],
  lastModified: Date,
  categories: [Object],
  headline: String,
  byline: String,
});

export default mongoose.model("Article", ArticleSchema);
