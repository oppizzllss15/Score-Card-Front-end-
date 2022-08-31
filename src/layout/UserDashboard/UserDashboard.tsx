import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Userheader } from "../../components/Userheader";
import { UserSideBar } from "../../components/UserSideBar";
import "./UserDashboard.css";

interface RNode {
   children: ReactNode;
}

export const UserDashboardLayout = ({ children }: RNode) => {
   return (
      <div className="dash">
         <Userheader />
         <div className="layout-flex">
            <div className="sidebar-position">
             
               <UserSideBar />
            </div>
            <div className="children-position">{children}</div>
         </div>
      </div>
   );
};
