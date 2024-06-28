import { useState } from "react";
import { GiSoccerField } from "react-icons/gi";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { FadeLoader } from "react-spinners";
import API from "../../API";
import { useFetchData } from "../../hooks";
import useAutoRefetch from "../../hooks/useAutoRefetch";
import useSyncStateWithData from "../../hooks/useSyncStateWithData";
import { getCurrentWeek } from "../../utils";
import "./Schedule.scss";
import MemoizedScheduleRow from "./ScheduleRow";

const Schedule = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const { data, refetch, loading } = useFetchData(() => API.getFixturesForWeek(weekOffset), [weekOffset]);
  const [games] = useSyncStateWithData(data);

  useAutoRefetch(weekOffset, refetch);

  const handlePreviousWeek = () => {
    setWeekOffset(weekOffset - 1);
  };
  const handleNextWeek = () => setWeekOffset(weekOffset + 1);

  console.log(weekOffset); // Moved console.log outside JSX

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
          {loading ? (
            <tr>
              <td className="schedule-table__message"><FadeLoader color="#000" loading={loading} size={15} /></td>
            </tr>
          ) : games && games.length > 0 ? (
            games.map((game) => (
              <MemoizedScheduleRow key={game.fixture.id} game={game} />
            ))
          ) : (
            <tr>
              <td className="schedule-table__message">
                <GiSoccerField className="schedule-table__icon" />
                <p className="schedule-table__msg">No matches on the selected date</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
export default Schedule;