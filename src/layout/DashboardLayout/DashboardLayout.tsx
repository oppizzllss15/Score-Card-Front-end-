import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import "./DashboardLayout.css";

interface RNode {
   children: ReactNode;
}

export const DashboardLayout = ({ children }: RNode) => {
   return (
      <div className="dash">
         <Header />
         <div className="layout-flex">
            <div className="sidebar-position">
             
               <SideBar />
            </div>
            <div className="children-position">{children}</div>
         </div>
      </div>
   );
};
