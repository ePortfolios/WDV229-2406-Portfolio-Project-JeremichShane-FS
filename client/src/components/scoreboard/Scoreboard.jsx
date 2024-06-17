import { ScoreboardCard } from "../cards";
import "./Scoreboard.scss";

// TODO: Map through the data and render a ScoreboardCard component for each item
// Right now we are just rendering 7 ScoreboardCard components, but this will be dynamic in the next milestone

const Scoreboard = () => {
  return (
    <section className="scoreboard">
      <ScoreboardCard />
      <ScoreboardCard />
      <ScoreboardCard />
      <ScoreboardCard />
      <ScoreboardCard />
      <ScoreboardCard />
      <ScoreboardCard />
    </section>
  );
};
export default Scoreboard;
