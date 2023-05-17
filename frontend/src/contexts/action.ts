import { StateType } from "../stateType";

export type Actions =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: StateType;
    }
  | {
      type: "GET_TRANSACTION";
      payload: StateType[];
    };
