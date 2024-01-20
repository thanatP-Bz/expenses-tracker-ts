import { useEffect } from "react";
import Transition from "./Transition";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../expenses/expensesSlice";
import { RootState } from "../store/store";

const TransactionList = () => {
  /*  const { transactions, dispatch } = useAppContext(); */
  const transactions = useSelector(
    (state: RootState) => state.expenses.transactions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://expense-tracker-94sm.onrender.com/api/v1/expense/"
      );

      const data = response.data;

      if (response) {
        /*  dispatch({ type: "GET_TRANSACTION", payload: data }); */
        dispatch(getTransaction(data));

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
