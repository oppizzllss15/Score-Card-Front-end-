import { useState } from "react";
import { logoutUser } from "../utils/api";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbArrowBarRight } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = async () => {
    await logoutUser();
    localStorage.setItem("token", "");
    localStorage.setItem("Id", "");
    localStorage.setItem("User", "");
    localStorage.setItem("lastname", "");
    localStorage.setItem("role", "");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="content-link">
        <Link to="/dashboard">
          <div
            className="dash_icon"
            id={location.pathname === "/dashboard" ? "active" : ""}
          >
            <GrHomeRounded /> <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/createuser">
          <div
            className="dash_icon"
            id={location.pathname === "/createuser" ? "active" : ""}
          >
            <BiUser /> <p>User Management</p>
          </div>
        </Link>
        {role === "superadmin" && (
          <Link to="/createadmin">
            <div
              className="dash_icon"
              id={location.pathname === "/createadmin" ? "active" : ""}
            >
              <AiOutlineUserAdd /> <p>Admin Management</p>
            </div>
          </Link>
        )}
        <Link to="/weeklyperformance">
          <div
            className="dash_icon"
            id={location.pathname === "/weeklyperformance" ? "active" : ""}
          >
            <BsGraphUp /> <p>Performance</p>
          </div>
        </Link>
      </div>

      <div className="bottom">
        <Link to="/login">
          <div className="logout">
            <TbArrowBarRight />
            <p onClick={handleChange}>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
