import { ExpenseType } from "../inintialType";

export type Actions =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: ExpenseType;
    }
  | {
      type: "GET_TRANSACTION";
      payload: ExpenseType[];
    }
  | {
      type: "DISPLAY_ALERT";
    }
  | {
      type: "CLEAR_ALERT";
    }
  | {
      type: "REGISTER_USER";
    };
