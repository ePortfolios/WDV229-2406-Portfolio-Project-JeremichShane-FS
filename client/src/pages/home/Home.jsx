import { useState } from "react";
import { Newsfeed, Scoreboard } from "../../components";
import useFetchCombinedGame from "../../hooks/useFetchCombinedGame";

const Home = () => {
  const [games, setGames] = useState([]);

  useFetchCombinedGame(setGames);

  return (
    <div>
      <Scoreboard games={games} />
      <Newsfeed />
    </div>
  );
};
export default Home;
