import { useEffect, useState } from "react";
import { GiSoccerField } from "react-icons/gi";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import API from "../../API";
import { ScheduleButton } from "../../components/buttons";
import { useFetchData } from "../../hooks";
import useSyncStateWithData from "../../hooks/useSyncStateWithData";
import { getCurrentWeek } from "../../utils";
import "./Schedule.scss";
import MemoizedScheduleRow from "./ScheduleRow";

const Schedule = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const { data, refetch } = useFetchData(() => API.getFixturesForWeek(weekOffset), [weekOffset]);
  const [games] = useSyncStateWithData(data);

  useEffect(() => {
    refetch();
  }, [weekOffset, refetch]);

  const handlePreviousWeek = () => {
    setWeekOffset(weekOffset - 1);
    console.log(weekOffset);
  };
  const handleNextWeek = () => setWeekOffset(weekOffset + 1);

  return (
    <section className="schedule">
      <h1 className="schedule__title">Schedule & Scores</h1>
      <h2 className="schedule__week"></h2>
      <div className="schedule__navigation">
        <div className="schedule-btn">
          <RiArrowLeftLine onClick={handlePreviousWeek} className="schedule-btn--arrow" />
          {getCurrentWeek(weekOffset)}
          <RiArrowRightLine onClick={handleNextWeek} className="schedule-btn--arrow" />
        </div>
      </div>
      <table className="schedule-table">
        <tbody>
          {games.length > 0 ? (
            games.map(game => <MemoizedScheduleRow key={game.fixture.id} game={game} />)
          ) : (
            <tr>
              <td className="schedule-table__message">
                <GiSoccerField className="schedule-table__icon" />
                <p className="schedule-table__msg">No matches on the selected date</p>
              </td>
            </tr>
          )}
        </tbody>

        <tbody>
          {games.map(game => (
            <MemoizedScheduleRow key={game.fixture.id} game={game} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Schedule;
