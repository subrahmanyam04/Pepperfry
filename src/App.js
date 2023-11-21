

import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Findstudio from './pages/Findstudio';
import { AddShoppingCart } from '@mui/icons-material';
import './App.css';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div>
       <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/findstudio' element={<Findstudio/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
