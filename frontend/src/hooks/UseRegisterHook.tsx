import { useAppContext } from "./UseAppContext";
import axios, { AxiosError } from "axios";
import { addUserToLocalStorageRegister } from "../localStorage";

export const UseRegisterHook = () => {
  const { dispatch, clearAlert } = useAppContext();

  type CurrentUserType = {
    userName: string;
    password: string;
    email: string;
  };

  const register = async (currentUser: CurrentUserType) => {
    const values = {
      userName: currentUser.userName,
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
      const { userName, token } = data;

      //add to localStorage
      addUserToLocalStorageRegister({ userName, token });

      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: { userName, token },
      });

      clearAlert();
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
