import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import './App.css';
import { Logo } from './components/Logo';
import { PasswordInput } from './components/PasswordInput';
import { SignupButton } from './components/SignupButton';
import { SimpleInput } from './components/SimpleInput';
import { DashboardLayout } from './pages/DashboardLayout/DashboardLayout';

function App() {
  return (
    <Routes>
      <Route path="/change-password" element={<Change />} />
      <Route path="/" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />
      
      <Route path="/dashboard" element={<DashboardLayout/>}>
      </Route>
      <Route path="/update-password" element={<Change/>} />
    </Routes>
  )
}

export default App;
