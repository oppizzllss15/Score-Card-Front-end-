import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/api";
import { Link, useLocation} from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbArrowBarRight } from "react-icons/tb";

export const UserSideBar = () => {

  const navigate = useNavigate();
    const location = useLocation();
  const userid = localStorage.getItem("Id");

  const handleChange = async () => {
    await logoutUser();
    localStorage.setItem("token", "");
    localStorage.setItem("Id", "");
    navigate("/login");
  };

  return (
     <div className="sidebar">
        <div className="content-link">
           <Link to="/userdashboard">
              <div
                 className="dash_icon"
                 id={location.pathname === "/userdashboard" ? "active" : ""}
              >
                 <RiDashboardLine /> <p>Dashboard</p>
              </div>
           </Link>
           <Link to={`/scorecard/${userid}`}>
              <div
                 className="dash_icon"
                 id={
                    location.pathname === `/scorecard/${userid}` ? "active" : ""
                 }
              >
                 <TbReportSearch /> <p>Performance Report</p>
              </div>
           </Link>
           <Link to={`#`}>
              <div className="dash_icon">
                 <AiOutlineUserAdd /> <p>Skill Evaluation</p>
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
