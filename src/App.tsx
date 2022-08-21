import React from 'react';
import './App.css';
import { Logo } from './Components/Logo';
import { PasswordInput } from './Components/PasswordInput';
import { SignupButton } from './Components/SignupButton';
import { SimpleInput } from './Components/SimpleInput';
import { Change } from './pages/Change_password/Change';
import { DashboardLayout } from './pages/DashboardLayout/DashboardLayout';
import { Forget } from './pages/Forget/Forget';
import { Reset } from './pages/Reset_password/Reset';


function App() {
  return (
     <div className="App">
     <DashboardLayout/>
     </div>
  );
}

export default App;
