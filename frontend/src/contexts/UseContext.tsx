import { createContext, useReducer, ReactNode } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./reducer";

const AppContext = createContext(initialState);

type Children = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: "DISPLAY_ALERT" });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, displayAlert, clearAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
