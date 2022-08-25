import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbArrowBarRight } from "react-icons/tb";

export const SideBar = () => {
   return (
      <div className="sidebar">
         <div className="content-link">
            <div className="dash_icon">
               <GrHomeRounded /> <p>Dashboard</p>
            </div>

            <div className="dash_icon">
               <BiUser /> <p>User Management</p>
            </div>

            <div className="dash_icon">
               <AiOutlineUserAdd /> <p>Admin Management</p>
            </div>
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
