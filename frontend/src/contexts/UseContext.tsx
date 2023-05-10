import { createContext, useReducer, ReactNode } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./reducer";

const AppContext = createContext(initialState);

type UseContextProviderType = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
