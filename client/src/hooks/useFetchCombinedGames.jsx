import { useEffect } from "react";
import API from "../API";

const useFetchCombinedGames = setGames => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await API.getCombinedFixtures();
        setGames(games);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setGames]);
};

export default useFetchCombinedGames;
