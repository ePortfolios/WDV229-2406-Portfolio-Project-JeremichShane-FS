import PropTypes from "prop-types";
import "./Form.scss";

const Form = ({ children, className }) => {
  return <form className={`form ${className}`}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Form;
