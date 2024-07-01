import axios from "axios";
import { getAllFixtures } from "../controllers/fixtureController.js";
import Article from "../models/ArticleSchema.js";
import Fixture from "../models/FixtureSchema.js";
import Standings from "../models/StandingsSchema.js";

const currentYear = new Date().getFullYear();
const MLS = "253";

export const fetchArticles = async () => {
  try {
    const res = await axios.get("https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news");
    const articles = res.data.articles;
    for (let article of articles) {
      const data = new Article(article);
      await data.save();
    }
  } catch (err) {
    console.error("This is fetchArticles Error: ", err);
  }
};

export const fetchStandings = async () => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { league: MLS, season: currentYear },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const res = await axios.request(options);
    const standings = await res.data.response[0].league.standings;

    for (let team of standings[0]) {
      const data = new Standings(team);
      await data.save();
    }
    for (let team of standings[1]) {
      const data = new Standings(team);
      await data.save();
    }
  } catch (err) {
    console.error(err);
  }
};

export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { league: MLS, season: currentYear },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const res = await axios.request(options);
    const fixtures = res.data.response;

    for (let fixture of fixtures) {
      const data = new Fixture(fixture);
      await data.save();
    }
  } catch (err) {
    console.error(err);
  }
};

export const getCombinedFixtures = async () => {
  try {
    const { previous: lastGames } = await getAllFixtures(25, "last");
    const { upcoming: nextGames } = await getAllFixtures(25, "next");

    const combinedGames = [...lastGames, ...nextGames];

    return combinedGames;
  } catch (err) {
    console.error("Error fetching combined fixtures:", err);
    throw err;
  }
};
