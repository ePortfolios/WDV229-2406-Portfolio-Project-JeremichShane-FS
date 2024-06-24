import { useContext } from "react";
import { StandingsTable } from "../../components";
import { StandingsContext } from "../../contexts/StandingsContext";
import { columns } from "./Standings.data";
import "./Standings.scss";

const Standings = () => {
  const { standings } = useContext(StandingsContext);
  const eastStandings = standings.filter(team => team.group === "Eastern Conference");
  const westStandings = standings.filter(team => team.group === "Western Conference");

  return (
    <section className="standings">
      <div className="standings__east">
        <h1 className="standings__title">Eastern Conference</h1>
        <StandingsTable standingsData={eastStandings} columns={columns} />
      </div>
      <div className="standings__west">
        <h1 className="standings__title">Western Conference</h1>
        <StandingsTable standingsData={westStandings} columns={columns} />
      </div>
    </section>
  );
};

export default Standings;
