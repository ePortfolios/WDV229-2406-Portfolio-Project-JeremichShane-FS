import Proptypes from "prop-types";
import "./FormButton.scss";

const FormButton = ({ type, children, onClick, variant }) => {
  return (
    <button type={type} className={`form-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

FormButton.propTypes = {
  type: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  onClick: Proptypes.func,
  variant: Proptypes.string,
};

export default FormButton;
