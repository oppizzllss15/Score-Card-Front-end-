import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbArrowBarRight } from "react-icons/tb";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="content-link">
        <Link to="/dashboard">
          <div className="dash_icon" id="1">
            <GrHomeRounded /> <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/createuser">
          <div className="dash_icon" id="2">
            <BiUser /> <p>User Management</p>
          </div>
        </Link>
        <Link to="/createadmin">
          <div className="dash_icon" id="3">
            <AiOutlineUserAdd /> <p>Admin Management</p>
          </div>
        </Link>
      </div>

      <div className="bottom">
        <Link to="/login">
          <div className="logout">
            <TbArrowBarRight />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
