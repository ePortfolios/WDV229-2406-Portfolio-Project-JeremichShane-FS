import Proptypes from "prop-types";
import "./ScheduleButton.scss";

const ScheduleButton = ({ type, children, variant }) => {
  return (
    <button type={type} className={`schedule-button ${variant}`}>
      {children}
    </button>
  );
};

ScheduleButton.propTypes = {
  type: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  variant: Proptypes.string,
};

export default ScheduleButton;
