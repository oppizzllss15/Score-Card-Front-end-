import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import { Logo } from "../../components/Logo";
import { FaSearch } from "react-icons/fa";
import { TbArrowBarRight } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./DashboardLayout.css";
import { Layout } from "../../layout/Layout";

export const DashboardLayout = () => {
   return (
      <div>
         <div className="dash">
            <div className="navbar">
               <div className="logo">
                  <Logo />
               </div>

               <div className="search">
                  <div className="sea">
                     <FaSearch />
                     <input
                        type="text"
                        placeholder="search"
                        className="seaIn"
                     />
                  </div>
               </div>

               <div className="profile">
                  <div className="image"></div>
                  <div className="name">
                     <p>Cherish</p>
                  </div>
               </div>
            </div>

            <div className="content">
               <div className="sidebar">
                  <div className="content-link">
                     <div className="dash_icon">
                        <GrHomeRounded /> <p>Dashbord</p>
                     </div>

                     <div className="dash_icon">
                        <BiUser /> <p>User Mangement</p>
                     </div>

                     <div className="dash_icon">
                        <AiOutlineUserAdd /> <p>Admin Mangement</p>
                     </div>
                  </div>

                  <div className="bottom">
                     <div className="logout">
                        <TbArrowBarRight />
                        <p>Logout</p>
                     </div>
                  </div>
               </div>
               <div className="content-part" style={{padding: "32px"}}>
                  
             <Layout />

                  
               </div>
            </div>
         </div>
      </div>
   );
};
