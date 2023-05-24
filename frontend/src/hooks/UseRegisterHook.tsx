import { useAppContext } from "./UseAppContext";
import axios from "axios";
export const UseRegisterHook = () => {
  const { dispatch } = useAppContext();

  const register = async (currentUser: {
    name: string;
    email: string | number;
    password: string | number;
  }) => {
    const { name, email, password } = currentUser;

    const response = await axios.post("http://localhost:8000/register", {
      name,
      email,
      password,
    });

    const data = response.data;
    console.log(data);
  };

  return { register };
};
