import { useContext } from "react";
import { Table } from "../";
import { StandingsContext } from "../../contexts/StandingsContext";
import { columns } from "./StandingsBasic.data";
import "./StandingsBasic.scss";

const StandingsBasic = () => {
  const { standings } = useContext(StandingsContext);
  const eastStandings = standings.filter(team => team.group === "Eastern Conference");
  const westStandings = standings.filter(team => team.group === "Western Conference");

  return (
    <article className="standings-basic">
      <h1 className="standings-basic__title">MLS Standings</h1>
      <div className="standings-basic__east">
        <Table standingsData={eastStandings} columns={columns} />
      </div>
      <div className="standings-basic__west">
        <Table standingsData={westStandings} columns={columns} />
      </div>
    </article>
  );
};

export default StandingsBasic;
