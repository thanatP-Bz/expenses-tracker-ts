import { useAppContext } from "./UseAppContext";
import axios from "axios";
export const UseRegisterHook = () => {
  type CurrentUserType = {
    name: string;
    email: string | number;
    password: string | number;
  };

  const register = async (currentUser: CurrentUserType) => {
    const { name, email, password } = currentUser;

    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
      });

      const data = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};
