import { useState } from "react";
import Alert from "../components/Alert";

function Login() {
  interface InitialType {
    name: string;
    email: string;
    password: string | number;
    isMember: boolean;
    alert: boolean;
  }

  const initialState: InitialType = {
    name: "",
    email: "",
    password: "",
    isMember: false,
    alert: true,
  };

  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <div className="container">
      <Alert />
      <form action="" className="login-form">
        <div className="pb-4 text-2xl">
          <h2 className="text-gray-500">
            {values.isMember ? "Register" : "Login"}
          </h2>
        </div>

        {values.isMember ? (
          <div>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="password" />
          </div>
        ) : (
          <div>
            <input type="email" placeholder="email" />
            <input type="text" placeholder="password" />
          </div>
        )}

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
