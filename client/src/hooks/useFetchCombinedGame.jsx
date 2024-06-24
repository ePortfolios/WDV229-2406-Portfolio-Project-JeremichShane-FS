import { useEffect } from "react";
import API from "../API";

const useFetchCombinedGame = setGames => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof setGames !== "function") {
          throw new Error("setGames is not a function");
        }
        const games = await API.getCombinedFixtures();
        setGames(games);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setGames]);
};

export default useFetchCombinedGame;
