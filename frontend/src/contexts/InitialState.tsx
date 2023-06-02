import { Dispatch } from "react";
import { ExpenseType } from "../inintialType";
import { AuthenticationType } from "../inintialType";
import { Actions } from "./action";

//get data from localstorage
const email = localStorage.getItem("email");
const userName = localStorage.getItem("name");
const token = localStorage.getItem("token");

export type InitialState = {
  transactions: ExpenseType[];
  authentication: AuthenticationType;
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
  addTransaction?: (AddTransactionParams: {
    _id: number;
    text: string;
    amount: number;
  }) => void;
  displayAlert: () => void;
  clearAlert: () => void;
  registerUser: (currentUser: {
    name: string;
    email: string;
    password: string;
  }) => void;
  loginUser: (currentUser: { email: string; password: string }) => void;
};

export const initialState: InitialState = {
  transactions: [],
  authentication: {
    name: userName ? JSON.stringify("name") : "",
    email: email ? JSON.stringify("email") : "",
    token: token ? token : "",
    alertText: "",
    alertType: "",
    showAlert: false,
  },
  dispatch: () => void {},
  deleteTransaction: () => void {},
  addTransaction: () => void {},
  displayAlert: () => void {},
  clearAlert: () => void {},
  registerUser: () => void {},
  loginUser: () => void {},
};
