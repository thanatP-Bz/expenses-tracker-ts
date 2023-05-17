import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransition from "./components/AddTransition";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransition />
        <Login />
      </div>
    </>
  );
}

export default App;
