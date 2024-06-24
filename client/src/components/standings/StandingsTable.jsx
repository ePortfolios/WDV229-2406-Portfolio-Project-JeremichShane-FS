import PropTypes from "prop-types";

const StandingsTable = ({ conferenceName, standingsData }) => {
  return (
    <table className={`standings__table standings__table--${conferenceName.toLowerCase()}`}>
      <thead className="standings__thead">
        <tr className="standings__row">
          <th className="standings__header">{conferenceName.toUpperCase()}</th>
          <th className="standings__header">GP</th>
          <th className="standings__header">W</th>
          <th className="standings__header">D</th>
          <th className="standings__header">L</th>
          <th className="standings__header">GD</th>
          <th className="standings__header">Pts</th>
        </tr>
      </thead>
      <tbody className="standings__tbody">
        {standingsData.map(({ _id, team, all, goalsDiff, points }) => (
          <tr key={_id} className="standings__row">
            <td className="standings__data">{team.name}</td>
            <td className="standings__data">{all.played}</td>
            <td className="standings__data">{all.win}</td>
            <td className="standings__data">{all.draw}</td>
            <td className="standings__data">{all.lose}</td>
            <td className="standings__data">{goalsDiff > 0 ? `+${goalsDiff}` : goalsDiff}</td>
            <td className="standings__data">{points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StandingsTable.propTypes = {
  conferenceName: PropTypes.string.isRequired,
  standingsData: PropTypes.array.isRequired,
};

export default StandingsTable;
