import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Form, InputField } from "../../components";
// import { FormButton } from "../../components/buttons";
import "./Dashboard.scss";

const Dashboard = () => {
  const { user } = useAuth0();
  const [isEditMode] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user, user.email]);

  // const toggleEditMode = () => {
  //   setIsEditMode(prevMode => !prevMode);
  // };

  console.log(email);

  return (
    <section className="dashboard">
      <h1 className="dashboard__title">MLSHub Profile</h1>
      <Form className="dashboard__form-center">
        <div className="dashboard__container">
          <div className="dashboard__left">
            <div className="dashboard__avatar">
              <img src={user.picture} alt="avatar" className="dashboard__avatar-image" />
            </div>
          </div>
          <div className="dashboard__right">
            {isEditMode ? (
              <>
                <InputField
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                  id="email"
                />
                <InputField label="Password" type="password" id="password" />
                <InputField label="Change Password" type="password" id="change-password" />
              </>
            ) : (
              <>
                <div>Email: {email}</div>
                <div>Password: ******</div>
                <div>Change Password: ******</div>
              </>
            )}
            {/* <FormButton type="button" onClick={toggleEditMode}>
              {isEditMode ? "Save Changes" : "Update"}
            </FormButton> */}
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Dashboard;
