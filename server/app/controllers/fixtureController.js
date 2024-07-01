import Fixtures from "../models/FixtureSchema.js";

export const getAllFixtures = async (x = 25, type = "all") => {
  try {
    let fixtures = await Fixtures.find().sort({ "fixture.date": 1 });
    const currentDate = new Date();

    let previous = [];
    let upcoming = [];
    let allFixtures = [];

    if (type === "all") {
      allFixtures = fixtures;
    } else {
      if (type === "last") {
        previous = fixtures
          .filter(
            game => new Date(game.fixture.date) < currentDate && game.fixture.status.short === "FT"
          )
          .slice(-x);
      }

      if (type === "next") {
        upcoming = fixtures
          .filter(
            game => new Date(game.fixture.date) > currentDate && game.fixture.status.short === "NS"
          )
          .slice(0, x);
      }
    }

    if (type === "all") {
      return { all: allFixtures };
    } else if (previous.length === 0 && upcoming.length === 0) {
      throw new Error("No previous or upcoming games available.");
    } else {
      return { previous, upcoming };
    }
  } catch (err) {
    throw err;
  }
};

export const getFixturesForWeek = async (weekOffset = 0) => {
  try {
    const fixtures = await Fixtures.find().sort({ "fixture.date": 1 });
    const { startDate, endDate } = getCurrentWeekRange(weekOffset);

    const weekFixtures = fixtures.filter(fixture => {
      const fixtureDate = new Date(fixture.fixture.date);
      return fixtureDate >= startDate && fixtureDate <= endDate;
    });

    return weekFixtures;
  } catch (error) {
    console.error("Failed to get fixtures for week:", error);
    throw error;
  }
};

function getCurrentWeekRange(weekOffset = 0) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + weekOffset * 7);

  // date for the first day of the week (startDate)
  const first = currentDate.getDate() - currentDate.getDay();
  const startDate = new Date(currentDate);
  startDate.setDate(first);
  startDate.setHours(0, 0, 0, 0);

  // new base date for endDate
  const endDateBase = new Date(startDate);
  endDateBase.setDate(startDate.getDate() + 6);
  const endDate = new Date(endDateBase);
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
}
