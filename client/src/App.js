import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import GlobalContextState from "./context/GlobalContext";


function App() {
  return (
    <GlobalContextState>
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalContextState>
  );
}

export default App;
