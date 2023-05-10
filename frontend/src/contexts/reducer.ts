import { Actions } from "./action";
import { initialState } from "./InitialState";

export const reducer = (
  state: typeof initialState,
  action: Actions
): typeof initialState => {
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
