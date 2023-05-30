import { useAppContext } from "./UseAppContext";
import axios, { AxiosError } from "axios";

export const UseRegisterHook = () => {
  const { dispatch, clearAlert } = useAppContext();

  type CurrentUserType = {
    name: string;
    password: string;
    email: string;
  };

  const register = async (currentUser: CurrentUserType) => {
    const values = {
      name: currentUser.name,
      password: currentUser.password,
      email: currentUser.email,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      const { name, token, password } = data;
      console.log(name, token, password);
    } catch (e) {
      const error = e as AxiosError;

      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: { message: error.response?.data as string },
      });
      clearAlert();
    }
  };
  return { register };
};
