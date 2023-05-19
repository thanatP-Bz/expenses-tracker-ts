import { Expense } from "../expense";

export type Actions =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: Expense;
    }
  | {
      type: "GET_TRANSACTION";
      payload: Expense[];
    };
