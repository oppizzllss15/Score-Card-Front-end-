import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import { Logo } from "../../components/Logo";
import { FaSearch } from "react-icons/fa";
import { TbArrowBarRight } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./DashboardLayout.css";

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
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Mollitia nisi consequuntur reiciendis illo officia
                     accusantium, iusto sit nam iste atque sunt, magnam esse
                     saepe. Explicabo ipsa eius perferendis eligendi soluta?
                     Perferendis neque illo officiis quas, expedita, impedit
                     magnam rerum laudantium dolores labore, esse nam aspernatur
                     incidunt animi eum sed. Cumque, error repudiandae tenetur
                     ex quam expedita ab dolores voluptatibus repellat.
                  </p>

                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};
