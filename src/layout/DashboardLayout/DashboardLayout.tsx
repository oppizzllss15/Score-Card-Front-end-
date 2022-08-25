import React, { Fragment, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { FaSearch } from "react-icons/fa";
import { TbArrowBarRight } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
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
