import Standings from "../models/StandingsSchema.js";

const getStandings = async (req, res, next) => {
  try {
    const data = await Standings.find();
    if (data.length === 0) {
      throw new Error("No standings data available.");
    }
    return data;
  } catch (err) {
    throw err;
  }
};

export default getStandings;
