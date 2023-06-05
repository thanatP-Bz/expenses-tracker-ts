import { useAppContext } from "./UseAppContext";
import { removeUserToLocalStorage } from "../localStorage";
export const UseLogoutHook = () => {
  const { dispatch } = useAppContext();

  const logout = () => {
    dispatch({ type: "LOGOUT_USER" });
    removeUserToLocalStorage();
  };

  return { logout };
};
