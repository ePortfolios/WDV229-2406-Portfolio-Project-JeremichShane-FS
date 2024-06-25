import { useEffect } from "react";
import API from "../API";

const useFetchWeeklyGames = setGames => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await API.getFixturesForWeek();
        setGames(games);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setGames]);
};

export default useFetchWeeklyGames;
