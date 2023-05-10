import axios from "axios";
import { UseAppContext } from "./UseAppContext";

export const DeleteTransactionHook = () => {
  const { dispatch } = UseAppContext();

  const deleteTransaction = async (id: number) => {
    const response = await axios.delete(
      `https://expense-tracker-94sm.onrender.com/api/v1/expense/${id}`
    );

    if (response) {
      dispatch({ type: "DELETE_TRANSACTION", payload: id });
    }

    //remove from localstorage
    localStorage.removeItem("item");
  };

  return { deleteTransaction };
};
