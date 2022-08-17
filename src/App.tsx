import React from 'react';
import './App.css';
import { Change } from './pages/Change_password/Change';
import { Forget } from './pages/Forget/Forget';
import { Reset } from './pages/Reset_password/Reset';
import { Signup } from './pages/SignUp/Signup';


function App() {
  return (
     <div className="App">
      <Signup />
     </div>
  );
}

export default App;
