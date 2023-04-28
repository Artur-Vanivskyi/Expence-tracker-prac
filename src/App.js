import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';
import Addtransaction from './components/Addtransaction';


function App() {
  return (
   <div>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpences />
      <TransactionList />
      <Addtransaction />
    </div>
   </div>
  );
}

export default App;
