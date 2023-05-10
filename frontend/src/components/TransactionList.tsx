import { useEffect } from "react";
import { UseAppContext } from "../hooks/UseAppContext";
import Transition from "./Transition";
import axios from "axios";

const TransactionList = () => {
  const { transactions, dispatch } = UseAppContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://expense-tracker-94sm.onrender.com/api/v1/expense/"
      );

      const data = response.data;

      if (response) {
        dispatch({ type: "GET_TRANSACTION", payload: data });

        //localStorage
        localStorage.setItem("item", JSON.stringify(data));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transition key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
