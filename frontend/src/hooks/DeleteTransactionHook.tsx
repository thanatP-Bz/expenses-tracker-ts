import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteTransactions } from "../expenses/expensesSlice";
/* import { useAppContext } from "./UseAppContext"; */

export const DeleteTransactionHook = () => {
  /*  const { dispatch } = useAppContext(); */
  const dispatch = useDispatch();

  const deleteTransaction = async (id: number) => {
    const response = await axios.delete(
      `https://expense-tracker-94sm.onrender.com/api/v1/expense/${id}`
    );

    if (response) {
      /* dispatch({ type: "DELETE_TRANSACTION", payload: id }); */
      dispatch(deleteTransactions(id));
    }

    //remove from localstorage
    localStorage.removeItem("item");
  };

  return { deleteTransaction };
};
