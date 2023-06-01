import { Actions } from "./action";
import type { InitialState } from "./InitialState";

export const reducer = (state: InitialState, action: Actions): InitialState => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "GET_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
      };

    //display alert
    case "DISPLAY_ALERT":
      return {
        ...state,
        authentication: {
          ...state,
          name: "",
          token: "",
          alertText: "Please provide all values",
          alertType: "danger",
          showAlert: true,
        },
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        authentication: {
          ...state,
          name: "",
          token: "",
          alertText: "",
          alertType: "",
          showAlert: false,
        },
      };

    //register
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        authentication: {
          ...state,
          name: action.payload.name,
          token: action.payload.token,
          alertText: "Register successfully please wait...",
          alertType: "success",
          showAlert: true,
        },
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        authentication: {
          ...state,
          name: "",
          token: "",
          alertText: action.payload.message,
          alertType: "danger",
          showAlert: true,
        },
      };
    //login
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        authentication: {
          ...state,
          name: "",
          token: "",
          alertText: "Login successfully please wait...",
          alertType: "success",
          showAlert: true,
        },
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        authentication: {
          ...state,
          name: "",
          token: "",
          alertText: action.payload.message,
          alertType: "danger",
          showAlert: true,
        },
      };

    default:
      return state;
  }
};
