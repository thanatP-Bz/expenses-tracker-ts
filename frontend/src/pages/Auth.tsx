import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../login";
import { useAppContext } from "../hooks/UseAppContext";
import Alert from "../components/Alert";
import FormRow from "../components/FormRow";
import { UseRegisterHook } from "../hooks/UseRegisterHook";
import { UseLoginHook } from "../hooks/UseLoginHook";

const initialState: LoginType = {
  userName: "",
  password: "",
  email: "",
  isMember: true,
  showAlert: true,
};

function Login() {
  //useNavigate
  const navigate = useNavigate();
  //initial values
  const [values, setValues] = useState(initialState);
  //global state
  const { authentication, displayAlert } = useAppContext();
  //hooks
  const { register } = UseRegisterHook();
  const { login } = UseLoginHook();

  //toggle Member
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //form event
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const { userName, password, email, isMember } = values;

    if ((!email && !password) || (!userName && !isMember)) {
      displayAlert();
      return;
    }

    const currentUser = { userName, password, email };

    if (isMember) {
      login(currentUser);
    } else {
      register(currentUser);
    }

    setValues({ ...values, userName: "", email: "", password: "" });
  };

  //onChange Event
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authentication.userName) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [authentication.userName, navigate]);

  return (
    <div className="container">
      {values.showAlert && <Alert />}
      <form onSubmit={onSubmitHandler} className="login-form">
        <div className="pb-4 text-2xl">
          <h2 className="text-gray-500">
            {values.isMember ? "Login" : "Register"}
          </h2>
        </div>

        {!values.isMember && (
          <FormRow
            type="text"
            placeholder="name"
            name="userName"
            onChange={onChangeHandler}
            value={values.userName}
          />
        )}

        <FormRow
          type="email"
          placeholder="email"
          name="email"
          onChange={onChangeHandler}
          value={values.email}
        />

        <FormRow
          type="password"
          placeholder="password"
          name="password"
          onChange={onChangeHandler}
          value={values.password}
        />

        <button type="submit" className="btn">
          submit
        </button>
        <p className="text-center">
          <button
            type="submit"
            className="text-blue-400"
            onClick={toggleMember}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
