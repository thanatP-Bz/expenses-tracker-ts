import { useState } from "react";
import { AddTransactionHook } from "../hooks/AddTransactionHook";

const AddTransition = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | string>(0);

  const { addTransaction } = AddTransactionHook();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const id = Math.random();

    addTransaction(id, text, +amount);

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
