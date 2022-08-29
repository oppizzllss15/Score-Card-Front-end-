import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { UserSideBar } from "../../components/UserSideBar";
import "./DashboardLayout.css";

interface RNode {
   children: ReactNode;
}

export const UserDashboardLayout = ({ children }: RNode) => {
   return (
      <div className="dash">
         <Header />
         <div className="layout-flex">
            <div className="sidebar-position">
             
               <UserSideBar />
            </div>
            <div className="children-position">{children}</div>
         </div>
      </div>
   );
};
