import PropTypes from "prop-types";
import "./Table.scss";

const Table = ({ standingsData, columns }) => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__row">
          {columns.map(({ header, width, textAlign }, index) => (
            <th
              key={index}
              className="table__header"
              style={{ width: width, textAlign: textAlign }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__tbody">
        {standingsData.map((rowData, rowIndex) => (
          <tr key={rowIndex} className="table__row">
            {columns.map(({ render, width, textAlign }, colIndex) => (
              <td
                key={colIndex}
                className="table__data"
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

Table.propTypes = {
  standingsData: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Table;
