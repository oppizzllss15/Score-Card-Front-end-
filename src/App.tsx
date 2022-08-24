import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import './App.css';
import { Admin } from './pages/Admin-dashboard/Admin';

import {Login} from './pages/Login/Login';
import { Signup } from "./pages/SignUp/Signup";
import { DashboardLayout } from './pages/DashboardLayout/DashboardLayout';
import DecadevManagement from "./pages/User_management/User-management";

function App() {
  return (
    <Routes>
      <Route path="/forgot/password" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />
      <Route path="/dashboard" element={<DashboardLayout/>}/>
      <Route path="/update-password" element={<Change/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/all/devs" element={<DecadevManagement />} />
      <Route path="/stacks" element={<Admin />} />
    </Routes>
  )
}
export default App;
