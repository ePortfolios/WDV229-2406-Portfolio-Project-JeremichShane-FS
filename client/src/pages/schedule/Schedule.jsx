import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { ScheduleButton } from "../../components/buttons";
import useFetchWeeklyGames from "../../hooks/useFetchWeeklyGames";
import { formatDateShort, formatTime, getCurrentWeek } from "../../utils";

const Schedule = () => {
  const [games, setGames] = useState([]);
  console.log(games);

  useFetchWeeklyGames(setGames);

  return (
    <section>
      <h1>Schedule & Scores</h1>
      <h2>{getCurrentWeek()}</h2>
      <div>
        <ScheduleButton type="FormButton" variant="flex">
          <RiArrowLeftLine />
          Previous Week
        </ScheduleButton>
        <ScheduleButton type="FormButton" variant="flex">
          Next Week
          <RiArrowRightLine />
        </ScheduleButton>
      </div>
      <ul>
        {games.map(game => (
          <li key={game.fixture.id}>
            <div>{formatDateShort(game.fixture.date)}</div>
            <div>
              <img src={game.teams.home.logo} alt={`${game.teams.home.name}'s name`} />
              <span>{game.teams.home.name}</span>
            </div>
            <span>
              {game.fixture.status.short === "FT" ? (
                <span>
                  {game.score.fulltime.home} - {game.score.fulltime.away}
                </span>
              ) : (
                formatTime(game.fixture.date)
              )}
            </span>
            <div>
              <img src={game.teams.away.logo} alt={`${game.teams.away.name}'s name`} />
              <span>{game.teams.away.name}</span>
            </div>
            <div>
              <span>{game.league.round.split(" - ")[0]}</span>
              <span>{game.fixture.venue.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Schedule;
