import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/api";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbArrowBarRight } from "react-icons/tb";

export const UserSideBar = () => {
  const [active, setActive] = useState("userdash");
  const navigate = useNavigate();
  const userid = localStorage.getItem("Id");

  const handleChange = async () => {
    await logoutUser();
    localStorage.setItem("token", "");
    localStorage.setItem("Id", "");
    navigate("/login");
  };
  console.log(active);
  return (
    <div className="sidebar">
      <div className="content-link">
        <Link to="/userdashboard">
          <div
            className="dash_icon"
            id={active === "userdash" ? "active" : ""}
            onClick={() => setActive("userdash")}
          >
            <RiDashboardLine /> <p>Dashboard</p>
          </div>
        </Link>
        <Link to={`/scorecard/${userid}`}>
          <div
            className="dash_icon"
            id={active === "performance" ? "active" : ""}
            onClick={() => setActive("performance")}
          >
            <TbReportSearch /> <p>Performance Report</p>
          </div>
        </Link>
        <Link to={`/scorecard/${userid}`}>
          <div
            className="dash_icon"
            id={active === "evaluation" ? "active" : ""}
            onClick={() => setActive("evaluation")}
          >
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
