import Proptypes from "prop-types";
import "./FormButton.scss";

const FormButton = ({ type, children, variant }) => {
  return (
    <button type={type} className={`form-button ${variant}`}>
      {children}
    </button>
  );
};

FormButton.propTypes = {
  type: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  variant: Proptypes.string,
};

export default FormButton;
