import { createContext, useReducer, ReactNode } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./reducer";

const AppContext = createContext(initialState);

type UseContextProviderType = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: "DISPLAY_ALERT" });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
