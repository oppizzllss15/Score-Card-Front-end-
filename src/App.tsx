import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import './App.css';
import {Login} from './pages/Login/Login';
import { DashboardLayout } from './pages/DashboardLayout/DashboardLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />
      <Route path="/dashboard" element={<DashboardLayout/>}>
      </Route>
      <Route path="/update-password" element={<Change/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App;
