import { useAppContext } from "./UseAppContext";
import axios, { AxiosError } from "axios";

export const UseRegisterHook = () => {
  const { dispatch, clearAlert } = useAppContext();

  type CurrentUserType = {
    name: string;
    email: string;
    password: string;
  };

  const register = async (currentUser: CurrentUserType) => {
    const value = {
      name: currentUser.name,
      email: currentUser.email,
      passward: currentUser.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        value,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
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
