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
      <div className="standings__legend">
        <h2 className="standings__legend-title">Playoffs Designation</h2>
        <ul className="standings__legend-list">
          <li className="standings__legend-item">
            <span className="standings__legend-item--y">y</span> - Clinched Supporters&apos; Shield
          </li>
          <li className="standings__legend-item">
            <span className="standings__legend-item--y">y</span> - Clinched #1 Conference Seed
          </li>
          <li className="standings__legend-item">
            <span className="standings__legend-item--x">x</span> - Clinched Playoffs
          </li>
          <li className="standings__legend-item">
            <span className="standings__legend-item--e">e</span> - Eliminated from Playoffs
          </li>
        </ul>

        <h2 className="standings__legend-title">Tiebreakers</h2>
        <ol className="standings__legend-list">
          <li className="standings__legend-item">Total number of wins per match</li>
          <li className="standings__legend-item">
            Goal Differential (GD) per match (Goals For per match minus Goals Against per match)
          </li>
          <li className="standings__legend-item">Goals For (GF) per match</li>
          <li className="standings__legend-item">Fewest Disciplinary Points per match</li>
          <li className="standings__legend-item">
            Away goals Differential (per match – Away Goals For per Away match minus Away Goals
            Against per Away)
          </li>
          <li className="standings__legend-item">Away Goal For (per Away match)</li>
          <li className="standings__legend-item">
            Home Goals Differential (per match - Home Goals For per Home match minus Home Goals
            Against per Home match)
          </li>
          <li className="standings__legend-item">Home Goals For (per Home match)</li>
          <li className="standings__legend-item">
            Coin Toss (tie of two clubs) or Drawing of Lots (tie of three or more clubs)
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Standings;
