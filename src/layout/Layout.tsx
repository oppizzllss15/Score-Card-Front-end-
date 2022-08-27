import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Change } from "../pages/Change_password/Change";
import { Forget } from "../pages/Forget/Forget";
import { Login } from "../pages/Login/Login";
import { Reset } from "../pages/Reset_password/Reset";
import { Signup } from "../pages/SignUp/Signup";
import DevsWeeklyPerformance from "../pages/DevsWeeklyPerformance/DevsWeeklyPerformance";
import { ListWeek } from "../components/listWeek";

export const Layout = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Forget />} />
      <Route path="/reset-password/:id/:token" element={<Reset />} />
      <Route path="/update-password" element={<Change />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/devsweeklyperformance"
        element={<DevsWeeklyPerformance />}
      ></Route>
    </Routes>
  );
};
