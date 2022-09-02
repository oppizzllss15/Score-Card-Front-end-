import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import "./App.css";
import DevsWeeklyPerformance from "./pages/DevsWeeklyPerformance/DevsWeeklyPerformance";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/SignUp/Signup";
import DecadevManagement from "./pages/User_management/User-management";
import { CreateUser } from "./pages/Create_user/Create_user";
import { AdminDashboard } from "./pages/Admin-dashboard/Admindashboard";
import CreateAdmin from "./pages/Create-admin/CreateAdmin";
import { AdminProfile } from "./pages/Admin/AdminProfile";
import AdminManagement from "./pages/Admin/Admin-management";
import UserDashboard from "./pages/User-dashboard/User-dashboard";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { UserScorecard } from "./pages/User_scorecard/UserScorecard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot/password" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />
      <Route path="/change_password" element={<Change />} />

      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/createuser" element={<CreateUser />} />
      <Route path="/devmanagement" element={<DecadevManagement />} />
      <Route path="/weeklyperformance" element={<DevsWeeklyPerformance />} />
     
      
      <Route path="/createadmin" element={<CreateAdmin />} />
      <Route path="/adminmanagement" element={<AdminManagement />} />
      
      <Route path="/adminprofile/:id" element={<AdminProfile id="" />} />

      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/scorecard/:id" element={<UserScorecard />} />
    </Routes>
  );
}
export default App;
