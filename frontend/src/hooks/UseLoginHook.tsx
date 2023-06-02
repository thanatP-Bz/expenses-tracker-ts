import { useAppContext } from "./UseAppContext";
import axios, { AxiosError } from "axios";
import { addUserToLocalStorageLogin } from "../localStorage";

export const UseLoginHook = () => {
  const { dispatch, clearAlert } = useAppContext();

  type CurrentUserType = {
    password: string;
    email: string;
  };

  const login = async (currentUser: CurrentUserType) => {
    const values = {
      password: currentUser.password,
      email: currentUser.email,
    };

    try {
      const response = await axios.post("http://localhost:8000/login", values, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data;
      const { userName, email, token } = data;

      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: { userName: userName, email: email, token },
      });

      //add to localStorage
      addUserToLocalStorageLogin({ userName, email, token });

      clearAlert();
    } catch (e) {
      const error = e as AxiosError;
      console.log(error);
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: { message: error.response?.data as string },
      });
      clearAlert();
    }
  };
  return { login };
};
