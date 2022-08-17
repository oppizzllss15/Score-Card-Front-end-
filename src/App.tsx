import React from 'react';
import './App.css';
import { Logo } from './Components/Logo';
import { SignupButton } from './Components/SignupButton';
import { SimpleInput } from './Components/SimpleInput';
import { Change } from './pages/Change_password/Change';
import { Forget } from './pages/Forget/Forget';
import { Reset } from './pages/Reset_password/Reset';


function App() {
  return (
     <div className="App">
      < Change />
     </div>
  );
}

export default App;
