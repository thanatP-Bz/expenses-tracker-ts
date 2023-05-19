import { Dispatch } from "react";
import { Expense } from "../expense";
import { Actions } from "./action";

export type initialStateType = {
  transactions: Expense[];
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
  addTransaction?: (AddTransactionParams: {
    _id: number;
    text: string;
    amount: number;
  }) => void;
};

export const initialState: initialStateType = {
  transactions: [],
  dispatch: () => void {},
  deleteTransaction: () => void {},
  addTransaction: () => void {},
};
