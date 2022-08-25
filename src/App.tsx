import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import './App.css';
import { Admin } from './pages/Admin-dashboard/Admin';
import DevsWeeklyPerformance from "./pages/DevsWeeklyPerformance/DevsWeeklyPerformance";
import {Login} from './pages/Login/Login';
import { Signup } from "./pages/SignUp/Signup";
import DecadevManagement from "./pages/User_management/User-management";
import { CreateUser } from "./pages/Create_user/Create_user";
import {AdminManagement} from './pages/admin/AdminManagement'
import { DashboardLayout } from "./Layout/DashboardLayout/DashboardLayout";




function App() {
  return (
    
    <Routes>
      <Route path="/forgot/password" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />

      <Route path="/dashboard" element={<DashboardLayout/>}>
           <Route index element={<DecadevManagement />} />
           <Route path="/dashboard/manage_admins" element={<AdminManagement />} />       
           <Route path="/dashboard/createuser" element={<CreateUser />} />
           <Route path="/dashboard//stacks" element={<Admin />} />
           <Route path="/dashboard/update-password" element={<Change/>} />

     </Route>



     
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
    
    
    
      
    </Routes>

   
       
        
  )

}
export default App;
