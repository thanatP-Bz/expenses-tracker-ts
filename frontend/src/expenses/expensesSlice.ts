import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExpenseType } from "../inintialType";
import { AuthenticationType } from "../inintialType";
import { AlertType } from "../inintialType";

//get data from localstorage
const email = localStorage.getItem("email");
const userName = localStorage.getItem("userName");
const token = localStorage.getItem("token");

interface ExpensesState {
  transactions: ExpenseType[];
  authentication: AuthenticationType;
  alert: AlertType;
}

const initialState: ExpensesState = {
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
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addTransactions: (state, action: PayloadAction<ExpenseType>) => {
      state.transactions = [action.payload, ...state.transactions];
    },

    getTransaction: (state, action: PayloadAction<ExpenseType[]>) => {
      state.transactions = action.payload;
    },

    deleteTransactions: (state, action: PayloadAction<number>) => {
      state.transactions = state.transactions.filter((transaction) => transaction._id !== action.payload)
    }
  },
});

export const { addTransactions, getTransaction, deleteTransactions } = expensesSlice.actions;
export default expensesSlice.reducer;
