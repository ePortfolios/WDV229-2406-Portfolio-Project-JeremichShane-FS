import { useContext } from "react";
import { StandingsContext } from "../../contexts/StandingsContext";
import "./Standings.scss";
import StandingsTable from "./StandingsTable";

const Standings = () => {
  const { standings } = useContext(StandingsContext);

  const eastStandings = standings.filter(team => team.group === "Eastern Conference");
  const westStandings = standings.filter(team => team.group === "Western Conference");

  return (
    <article className="standings">
      <header className="standings__title">MLS Standings</header>
      <StandingsTable conferenceName="east" standingsData={eastStandings} />
      <StandingsTable conferenceName="west" standingsData={westStandings} />
    </article>
  );
};

export default Standings;
