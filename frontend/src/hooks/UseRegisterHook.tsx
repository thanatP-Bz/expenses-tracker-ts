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
    const { name, password, email } = currentUser;

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        { name, password, email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;

      type response = {
        user: string;
        token: string;
      };
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
