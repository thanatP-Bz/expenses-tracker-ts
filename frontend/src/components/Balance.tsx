import { useAppContext } from "../hooks/UseAppContext";
import { UseLogoutHook } from "../hooks/UseLogoutHook";
import Button from "./Button";

const Balance = () => {
  const { transactions } = useAppContext();
  const { logout } = UseLogoutHook();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <div>
        <h4>Your Balance</h4>
        <h1>{total}</h1>
      </div>

      <div>
        <Button onClick={logout} />
      </div>
    </div>
  );
};

export default Balance;
