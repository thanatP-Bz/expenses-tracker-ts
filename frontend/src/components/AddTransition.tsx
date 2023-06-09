import { useState } from "react";
import { useAddTransaction } from "../hooks/AddTransactionHook";

const AddTransition = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | string>(0);

  const { addTransaction } = useAddTransaction();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    type AddTransactionParams = {
      id: number;
      text: string;
      amount: number;
    };

    const newTransaction: AddTransactionParams = {
      id: Math.random(),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setAmount(0);
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            {/*  (negative - expense, positive - income) */}
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransition;
