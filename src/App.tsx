import React from 'react';
import './assets/css/app.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Congratulation from './pages/Congratulation';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:id' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/congratulation' element={<Congratulation />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
