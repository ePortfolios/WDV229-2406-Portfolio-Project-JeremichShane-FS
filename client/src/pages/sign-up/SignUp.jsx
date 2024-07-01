import { Form, InputField } from "../../components";
import { FormButton } from "../../components/buttons";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <section className="signup">
      <h1 className="signup__title">MLSHub Signup</h1>
      <Form className="signup__form-center">
        <div className="signup__container">
          <div className="signup__left">
            <div className="signup__avatar">
              <img
                src="https://via.placeholder.com/150"
                alt="avatar"
                className="signup__avatar-image"
              />
              <input type="file" id="avatar-upload" className="signup__upload" />
            </div>
          </div>
          <div className="signup__right">
            <InputField label="Username" type="text" id="username" />
            <InputField label="First Name" type="text" id="firstName" />
            <InputField label="Last Name" type="text" id="lastName" />
            <InputField label="Email" type="email" id="email" />
            <InputField label="Password" type="password" id="password" />
            <InputField label="Confirm Password" type="password" id="change-password" />
            <FormButton type="reset">Reset</FormButton>
            <FormButton type="button">Sign Up</FormButton>
          </div>
        </div>
      </Form>
    </section>
  );
};
export default SignUp;
