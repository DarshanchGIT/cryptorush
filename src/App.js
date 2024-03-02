import './App.css';
import { Route, Routes } from 'react-router-dom';
import Exchanges from './components/Exchanges';
import Coins from'./components/Coins';
import CoinDetail from './components/CoinDetail';

function App() {
  return (
    //routes completed
    <Routes>
      <Route path='/' element={<Exchanges/>}></Route>
      <Route path='/coins' element={<Coins/>}></Route>
      <Route path='/coins/:id' element={<CoinDetail/>}></Route>
    </Routes>
  );
}

export default App;
