import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Nanbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Exchange from './Pages/Exchange/Exchange';
import LivePrices from './Pages/LivePrices/LivePrices';
import Wallet from './Pages/Wallet/Wallet';
import NFTMarket from './Pages/NFTMarket/NFTMarket';
import Transaction from './Pages/Transaction/Transaction';
import Settings from './Pages/Settings/Settings';
import News from './Pages/News/News';
import Inbox from './Pages/Inbox/Inbox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Exchange' element={<Exchange />} />
        <Route path='/LivePrices' element={<LivePrices />} />
        <Route path='/Wallet' element={<Wallet />} />
        <Route path='/NFTMarket' element={<NFTMarket />} />
        <Route path='/Transaction' element={<Transaction />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/News' element={<News />} />
        <Route path='/Inbox' element={<Inbox />} />
      </Routes>
    </div>
  );
}

export default App;
