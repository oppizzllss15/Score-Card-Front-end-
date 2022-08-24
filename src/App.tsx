import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './pages/Login/Login'
import { Index } from './layout/Index';
import { Admin } from './pages/Admin-dashboard/Admin';
import EmptyStack from './pages/error-dashboard/Error';

function App() {
  return (
    <div className="App">
      { <Admin/> } 
    </div>
  );
}

export default App;
