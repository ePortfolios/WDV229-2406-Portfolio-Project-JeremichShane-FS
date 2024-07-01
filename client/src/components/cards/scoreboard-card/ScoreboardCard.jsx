import PropTypes from "prop-types";
import { formatDate, formatTeamName, formatTime } from "../../../utils";
import "./ScoreboardCard.scss";

const ScoreboardCard = ({ game }) => {
  return (
    <article className="scoreboard-card">
      <div className="scoreboard-card__header">
        <span className="scoreboard-card__round">{game.league.round.split(" - ")[0]}</span>
        {game.fixture.status.short === "FT" ? (
          <span className="scoreboard-card__match-time">Final</span>
        ) : (
          <span className="scoreboard-card__match-time">{formatTime(game.fixture.date)}</span>
        )}
      </div>
      <div className="scoreboard-card__team">
        <div className="scoreboard-card__team-info">
          <div className="scoreboard-card__team-container">
            <img
              src={game.teams.home.logo}
              alt={`${game.teams.home.name}'s logo`}
              className="scoreboard-card__team-logo"
            />
            <span className="scoreboard-card__team-name">
              {formatTeamName(game.teams.home.name)}
            </span>
          </div>
          <span
            className="scoreboard-card__score"
            style={{ opacity: game.score.fulltime.home !== null ? 1 : 0 }}>
            {game.score.fulltime.home ?? "-"}
          </span>
        </div>
      </div>
      <div className="scoreboard-card__team">
        <div className="scoreboard-card__team-info">
          <div className="scoreboard-card__team-container">
            <img
              src={game.teams.away.logo}
              alt={`${game.teams.away.name}'s logo`}
              className="scoreboard-card__team-logo"
            />
            <span className="scoreboard-card__team-name">
              {formatTeamName(game.teams.away.name)}
            </span>
          </div>
          <span
            className="scoreboard-card__score"
            style={{ opacity: game.score.fulltime.home !== null ? 1 : 0 }}>
            {game.score.fulltime.away ?? "-"}
          </span>
        </div>
      </div>
      <div className="scoreboard-card__match-date">{formatDate(game.fixture.date)}</div>
    </article>
  );
};

ScoreboardCard.propTypes = {
  game: PropTypes.shape({
    fixture: PropTypes.shape({
      date: PropTypes.string.isRequired,
      status: PropTypes.shape({
        short: PropTypes.string,
      }).isRequired,
    }).isRequired,
    league: PropTypes.shape({
      round: PropTypes.string.isRequired,
    }).isRequired,
    teams: PropTypes.shape({
      home: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      }).isRequired,
      away: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    score: PropTypes.shape({
      fulltime: PropTypes.shape({
        home: PropTypes.number,
        away: PropTypes.number,
      }),
    }).isRequired,
  }).isRequired,
};

export default ScoreboardCard;
