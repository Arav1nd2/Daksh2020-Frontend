import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Routes from './components/routes/Routes';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div class="contain">
      <Navbar />
      <Routes />
      <div className="footer text-center">
        Copyrights Reserved
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
