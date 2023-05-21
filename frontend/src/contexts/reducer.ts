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
        alert: {
          ...state,
          alertText: "Please provide all values",
          alertType: "danger",
          showAlert: true,
        },
      };

    default:
      return state;
  }
};
