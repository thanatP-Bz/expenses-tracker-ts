import { useState } from "react";
import { LoginType } from "../login";
import { useAppContext } from "../hooks/UseAppContext";
import Alert from "../components/Alert";
import FormRow from "../components/FormRow";

const initialState: LoginType = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: true,
};

function Login() {
  const [values, setValues] = useState(initialState);

  const { alert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if ((!email && !password) || (!name && !isMember)) {
      displayAlert();
      return;
    }

    console.log(values);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {values.showAlert && <Alert />}
      <form onSubmit={onSubmitHandler} className="login-form">
        <div className="pb-4 text-2xl">
          <h2 className="text-gray-500">
            {values.isMember ? "Register" : "Login"}
          </h2>
        </div>

        {values.isMember && (
          <FormRow
            type="text"
            placeholder="name"
            name="name"
            onChange={onChangeHandler}
            value={values.name}
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
          or{" "}
          <button
            type="button"
            className="text-blue-400"
            onClick={toggleMember}
          >
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
