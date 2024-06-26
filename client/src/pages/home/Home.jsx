import { memo } from "react";
import API from "../../API";
import { Newsfeed, Scoreboard } from "../../components";
import { useFetchData, useSyncStateWithData } from "../../hooks";

const HomeComponent = () => {
  const { data } = useFetchData(API.getCombinedFixtures);
  const [games] = useSyncStateWithData([], data);

  return (
    <div>
      <Scoreboard games={games} />
      <Newsfeed />
    </div>
  );
};

const Home = memo(HomeComponent);
Home.displayName = "Home";

export default Home;
