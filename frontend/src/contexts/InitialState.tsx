import { Dispatch } from "react";
import { stateType } from "../stateType";
import { Actions } from "./action";

type initialStateType = {
  transactions: stateType[];
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
  addTransaction?: (_id: number, text: string, amount: number) => void;
};

export const initialState: initialStateType = {
  transactions: [],
  dispatch: () => void {},
  deleteTransaction: () => void {},
  addTransaction: () => void {},
};
