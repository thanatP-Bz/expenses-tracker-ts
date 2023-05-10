import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransition from "./components/AddTransition";

function App() {
  return (
    <>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransition />
      </div>
    </>
  );
}

export default App;
