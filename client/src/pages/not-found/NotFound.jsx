import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAutoNavigateBack } from "../../hooks";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  useAutoNavigateBack(navigate, 5000);

  return (
    <div className="not-found">
      <TbError404 className="not-found__icon" />
      <h1>Page Not Found</h1>
      <div className="not-found__back-button">Go Back</div>
      <p className="not-found__text">You will be redirected in 5 seconds</p>
      <p className="not-found__text">or click the button to go back</p>
    </div>
  );
};

export default NotFound;
