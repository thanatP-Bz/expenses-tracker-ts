import { ExpenseType } from "../inintialType";
import { AuthenticationType } from "../inintialType";
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
      payload: AuthenticationType;
    }
  | {
      type: "REGISTER_USER_ERROR";
      payload: { message: string };
    };
