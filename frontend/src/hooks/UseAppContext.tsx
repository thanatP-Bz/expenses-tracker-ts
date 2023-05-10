import { useContext } from "react";
import { AppContext } from "../contexts/UseContext";

const UseAppContext = () => {
  return useContext(AppContext);
};

export { UseAppContext };
