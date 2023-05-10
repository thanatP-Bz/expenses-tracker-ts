import { stateType } from "../stateType";

export type Actions =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: stateType;
    }
  | {
      type: "GET_TRANSACTION";
      payload: stateType[];
    };
