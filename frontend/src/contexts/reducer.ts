import { Actions } from "./action";
import type { initialStateType } from "./InitialState";

export const reducer = (
  state: initialStateType,
  action: Actions
): initialStateType => {
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
    default:
      return state;
  }
};
