import React from 'react';
import './assets/css/app.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
