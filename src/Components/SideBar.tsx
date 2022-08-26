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
          <div className="dash_icon">
            <GrHomeRounded /> <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/createuser">
          <div className="dash_icon">
            <BiUser /> <p>User Management</p>
          </div>
        </Link>
        <Link to="/createadmin">
          <div className="dash_icon">
            <AiOutlineUserAdd />{" "}
            <p>Admin Management</p>
          </div>
        </Link>
      </div>

      <div className="bottom">
        <div className="logout">
          <TbArrowBarRight />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};
