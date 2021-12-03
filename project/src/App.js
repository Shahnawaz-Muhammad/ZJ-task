import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/cart' element={<CartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
