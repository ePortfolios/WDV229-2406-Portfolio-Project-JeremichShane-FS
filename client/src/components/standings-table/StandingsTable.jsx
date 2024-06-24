import PropTypes from "prop-types";
import "./StandingsTable.scss";

const StandingsTable = ({ standingsData, columns }) => {
  return (
    <table className="standings-table">
      <thead className="standings-table__thead">
        <tr className="standings-table__row">
          {columns.map(({ header, width, textAlign }, index) => (
            <th
              key={index}
              className="standings-table__header"
              style={{ width: width, textAlign: textAlign }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="standings-table__tbody">
        {standingsData.map((rowData, rowIndex) => (
          <tr key={rowIndex} className="standings-table__row">
            {columns.map(({ render, width, textAlign }, colIndex) => (
              <td
                key={colIndex}
                className="standings-table__data"
                style={{ width: width, textAlign: textAlign }}>
                {render(rowData)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StandingsTable.propTypes = {
  standingsData: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default StandingsTable;
