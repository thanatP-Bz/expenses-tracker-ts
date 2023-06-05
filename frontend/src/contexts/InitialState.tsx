import { Dispatch } from "react";
import { ExpenseType } from "../inintialType";
import { AuthenticationType } from "../inintialType";
import { AlertType } from "../inintialType";
import { Actions } from "./action";

//get data from localstorage
const email = localStorage.getItem("email");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("token");

export type InitialState = {
  transactions: ExpenseType[];
  authentication: AuthenticationType;
  alert: AlertType;
  dispatch: Dispatch<Actions>;
  displayAlert: () => void;
  clearAlert: () => void;
};

export const initialState: InitialState = {
  transactions: [],
  authentication: {
    userName: userName ? userName : null,
    email: email ? JSON.stringify("email") : "",
    token: token ? token : "",
  },
  alert: {
    alertType: "",
    alertText: "",
    showAlert: false,
  },
  dispatch: () => void {},
  displayAlert: () => void {},
  clearAlert: () => void {},
};
