import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import API from "../../API";
import { ScheduleButton } from "../../components/buttons";
import { useFetchData } from "../../hooks";
import useSyncStateWithData from "../../hooks/useSyncStateWithData";
import { formatDateShort, formatTime, getCurrentWeek } from "../../utils";
import "./Schedule.scss";

const Schedule = () => {
  const { data } = useFetchData(API.getFixturesForWeek, []);
  const [games] = useSyncStateWithData([], data);

  return (
    <section className="schedule">
      <h1 className="schedule__title">Schedule & Scores</h1>
      <h2 className="schedule__week">{getCurrentWeek()}</h2>
      <div className="schedule__navigation">
        <ScheduleButton
          className="schedule__button schedule__button--prev"
          type="FormButton"
          variant="flex">
          <RiArrowLeftLine />
          Previous Week
        </ScheduleButton>
        <ScheduleButton
          className="schedule__button schedule__button--next"
          type="FormButton"
          variant="flex">
          Next Week
          <RiArrowRightLine />
        </ScheduleButton>
      </div>
      <table className="schedule-table">
        <tbody>
          {games.map(game => (
            <tr key={game.fixture.id} className="schedule-table__row">
              <td className="schedule-table__date">{formatDateShort(game.fixture.date)}</td>
              <td className="schedule-table__team schedule-table__team--home">
                {game.teams.home.name}
                <img
                  src={game.teams.home.logo}
                  alt={`${game.teams.home.name}'s name`}
                  className="schedule-table__logo"
                />
              </td>
              <td className="schedule-table__score">
                {game.fixture.status.short === "FT" ? (
                  `${game.score.fulltime.home} - ${game.score.fulltime.away}`
                ) : (
                  <span className="schedule-table__time">{formatTime(game.fixture.date)}</span>
                )}
              </td>
              <td className="schedule-table__team schedule-table__team--away">
                <img
                  src={game.teams.away.logo}
                  alt={`${game.teams.away.name}'s name`}
                  className="schedule-table__logo"
                />
                {game.teams.away.name}
              </td>
              <td className="schedule-table__details">
                <span className="schedule-table__round">{`MLS ${
                  game.league.round.split(" - ")[0]
                }`}</span>
                <span className="schedule-table__venue">{game.fixture.venue.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Schedule;
