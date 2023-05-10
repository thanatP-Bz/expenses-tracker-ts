import { DeleteTransactionHook } from "../hooks/DeleteTransactionHook";

interface TransactionProps {
  transaction: {
    _id: number;
    text: string;
    amount: number;
  };
}

const Transition = ({ transaction }: TransactionProps) => {
  const { deleteTransaction } = DeleteTransactionHook();

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          type="submit"
          className="delete-btn"
          onClick={() => deleteTransaction(transaction._id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transition;
