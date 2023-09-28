import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Calc from './Calc';
import Navbar from './components/shared/Navbar';
import './index.css';

const App = () => {
  return (
      
      <div className = 'container'>
        <BrowserRouter>
          <Navbar id = "nav" />
            <Routes>
              <Route index element={<Home />} />
              <Route path="src/components/home/Home.js" element={<Home />} />
              <Route path="src/Calc.js" element={<Calc />}/>
            </Routes>
        </BrowserRouter>
      </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
)