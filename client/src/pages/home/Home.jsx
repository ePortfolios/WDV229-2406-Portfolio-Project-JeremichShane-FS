import { useState } from "react";
import { Newsfeed, Scoreboard } from "../../components";
import useFetchCombinedGames from "../../hooks/useFetchCombinedGames";

const Home = () => {
  const [games, setGames] = useState([]);

  useFetchCombinedGames(setGames);

  return (
    <div>
      <Scoreboard games={games} />
      <Newsfeed />
    </div>
  );
};
export default Home;
