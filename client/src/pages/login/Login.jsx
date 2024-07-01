import { Link } from "react-router-dom";
import { Form, InputField } from "../../components";
import { FormButton } from "../../components/buttons";
import { SIGNUP } from "../../constants/routes";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <Form>
          <InputField label="Username" type="text" id="username" />
          <InputField label="Password" type="password" id="password" />
          <div className="login__bottom-row">
            <Link to="#">
              <span className="login__span">Forget Password?</span>
            </Link>
            <div className="login__form-buttons">
              <Link to={SIGNUP}>
                <FormButton type="button" variant="red">
                  Sign Up
                </FormButton>
              </Link>
              <FormButton type="submit" variant="transparent">
                Login
              </FormButton>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};
export default Login;
