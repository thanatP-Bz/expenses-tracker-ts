import { useContext } from "react";
import { AppContext } from "../contexts/UseContext";

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext };
