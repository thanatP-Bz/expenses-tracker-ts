import axios from "axios";
import { useAppContext } from "./UseAppContext";

export const useAddTransaction = () => {
  const { dispatch } = useAppContext();

  const addTransaction = async (addTransaction: {
    id: number;
    text: string;
    amount: number;
  }) => {
    const { id, text, amount } = addTransaction;
    const response = await axios.post(
      `https://expense-tracker-94sm.onrender.com/api/v1/expense/add`,
      { id, text, amount }
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
