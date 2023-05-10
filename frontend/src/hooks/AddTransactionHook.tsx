import axios from "axios";
import { UseAppContext } from "./UseAppContext";

export const AddTransactionHook = () => {
  const { dispatch } = UseAppContext();

  const addTransaction = async (_id: number, text: string, amount: number) => {
    const response = await axios.post(
      `https://expense-tracker-94sm.onrender.com/api/v1/expense/add`,
      { id: _id, text: text, amount: amount }
    );

    const data = response.data;

    try {
      dispatch({ type: "ADD_TRANSACTION", payload: data });

      //add to localstorage
      localStorage.setItem("item", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return { addTransaction };
};
