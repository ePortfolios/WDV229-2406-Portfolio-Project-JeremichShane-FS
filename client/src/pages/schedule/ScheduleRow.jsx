import PropTypes from "prop-types";
import React from "react";
import { formatDateShort, formatTime } from "../../utils";

const ScheduleRow = React.memo(({ game }) => (
  <tr key={game.fixture.id} className="schedule-table__row">
    <td className="schedule-table__date">{formatDateShort(game.fixture.date)}</td>
    <td className="schedule-table__team schedule-table__team--home">
      {game.teams.home.name}
      <img
        src={game.teams.home.logo}
        alt={`${game.teams.home.name} logo`} //
        className="schedule-table__logo"
      />
    </td>
    <td className="schedule-table__score">
      {game.fixture.status.short === "FT" ? (
        <span className="schedule-table__result">
          <div className="schedule-table__result-score">{game.goals.home}</div>
          <div className="schedule-table__result-score">{game.goals.away}</div>
        </span>
      ) : (
        <span className="schedule-table__time">{formatTime(game.fixture.date)}</span>
      )}
    </td>
    <td className="schedule-table__team schedule-table__team--away">
      <img
        src={game.teams.away.logo}
        alt={`${game.teams.away.name} logo`} //
        className="schedule-table__logo"
      />
      {game.teams.away.name}
    </td>
    <td className="schedule-table__details">
      <span className="schedule-table__round">{`MLS ${game.league.round.split(" - ")[0]}`}</span>
      <span className="schedule-table__venue">{game.fixture.venue.name}</span>
    </td>
  </tr>
));

ScheduleRow.propTypes = {
  game: PropTypes.object.isRequired,
};

ScheduleRow.displayName = "ScheduleRow";

const MemoizedScheduleRow = React.memo(ScheduleRow);

export default MemoizedScheduleRow;
