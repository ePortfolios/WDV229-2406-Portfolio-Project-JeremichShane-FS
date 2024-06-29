import PropTypes from "prop-types";
import "./InputField.scss";

const InputField = ({ label, type, id, value }) => {
  return (
    <div className={`inputfield-group`}>
      <label htmlFor={id} className={`inputfield-group__label`}>
        {label}
      </label>
      <input type={type} id={id} value={value} className={`inputfield-group__input`} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default InputField;
