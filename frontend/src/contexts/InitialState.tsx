import { Dispatch } from "react";
import { ExpenseType } from "../inintialType";
import { AlertType } from "../inintialType";
import { Actions } from "./action";

export type InitialState = {
  transactions: ExpenseType[];
  alert: AlertType;
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
  addTransaction?: (AddTransactionParams: {
    _id: number;
    text: string;
    amount: number;
  }) => void;
  displayAlert: () => void;
  clearAlert: () => void;
};

export const initialState: InitialState = {
  transactions: [],
  alert: {
    alertText: "",
    alertType: "",
    showAlert: false,
  },
  dispatch: () => void {},
  deleteTransaction: () => void {},
  addTransaction: () => void {},
  displayAlert: () => void {},
  clearAlert: () => void {},
};
