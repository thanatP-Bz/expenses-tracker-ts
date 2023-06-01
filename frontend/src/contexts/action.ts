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
      type: "REGISTER_USER_SUCCESS";
      payload: { name: string; token: string };
    }
  | {
      type: "REGISTER_USER_ERROR";
      payload: { message: string };
    }
  | {
      type: "LOGIN_USER_SUCCESS";
      payload: { name: string; token: string };
    }
  | {
      type: "LOGIN_USER_ERROR";
      payload: { message: string };
    };
