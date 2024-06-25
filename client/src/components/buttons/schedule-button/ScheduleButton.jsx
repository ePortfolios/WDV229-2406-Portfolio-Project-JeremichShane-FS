import Proptypes from "prop-types";
import "./ScheduleButton.scss";

const ScheduleButton = ({ type, children, variant, onClick }) => {
  return (
    <button type={type} className={`schedule-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

ScheduleButton.propTypes = {
  type: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  variant: Proptypes.string,
  onClick: Proptypes.func.isRequired,
};

export default ScheduleButton;
