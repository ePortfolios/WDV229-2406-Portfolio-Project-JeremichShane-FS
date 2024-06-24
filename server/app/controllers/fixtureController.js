import Fixtures from "../models/FixtureSchema.js";

export const getAllFixtures = async (x = 25, type = "all") => {
  try {
    const fixtures = await Fixtures.find().sort({ "fixture.date": 1 });
    const currentDate = new Date();

    let previous = [];
    let upcoming = [];

    if (type === "all" || type === "last") {
      previous = fixtures
        .filter(
          game => new Date(game.fixture.date) < currentDate && game.fixture.status.short === "FT"
        )
        .slice(-x);
    }

    if (type === "all" || type === "next") {
      upcoming = fixtures
        .filter(
          game => new Date(game.fixture.date) > currentDate && game.fixture.status.short === "NS"
        )
        .slice(0, x);
    }

    if (previous.length === 0 && upcoming.length === 0) {
      throw new Error("No previous or upcoming games available.");
    }

    return { previous, upcoming };
  } catch (err) {
    throw err;
  }
};
