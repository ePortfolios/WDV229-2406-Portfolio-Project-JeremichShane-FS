import PropTypes from "prop-types";
import "./Form.scss";

const Form = ({ children }) => {
  return <form className="form">{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
