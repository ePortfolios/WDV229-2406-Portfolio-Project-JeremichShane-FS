import Article from "../models/ArticleSchema.js";

const getArticles = async (req, res, next) => {
  try {
    const data = await Article.find();
    if (data.length === 0) {
      return next(new Error("No articles data available."));
    }
    return data;
  } catch (err) {
    throw err;
  }
};

export default getArticles;
