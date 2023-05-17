import { Dispatch } from "react";
import { StateType } from "../stateType";
import { Actions } from "./action";

export type initialStateType = {
  transactions: StateType[];
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
