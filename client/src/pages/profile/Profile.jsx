import { Form, InputField } from "../../components";
import "./Profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">MLSHub Profile</h1>
      <Form className="profile__form-center">
        <div className="profile__container">
          <div className="profile__left">
            <div className="profile__avatar">
              <img
                src="https://via.placeholder.com/150"
                alt="avatar"
                className="profile__avatar-image"
              />
            </div>
          </div>
          <div className="profile__right">
            <InputField label="Username" type="text" id="username" />
            <InputField label="First Name" type="text" id="firstName" />
            <InputField label="Last Name" type="text" id="lastName" />
            <InputField label="Email" type="email" id="email" />
            <InputField label="Password" type="password" id="password" />
            <InputField label="Change Password" type="password" id="change-password" />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default Profile;
