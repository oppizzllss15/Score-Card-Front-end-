import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbArrowBarRight} from "react-icons/tb";

import "./component.css"




export const ProfileModal = () => {
  return (
     <div className="profilemodal">
        <div className="personpic">
           <div className="pimg"></div>
           <div className="namework">
              <p>
                 <b>Elon Musk</b>
              </p>
              <p>Stack Associate</p>
           </div>
        </div>
        <hr />
        <div className="personaction">
           <div className="pro">
              <AiOutlineUser /> <p>Profile</p>
           </div>
           <Link to="/change_password">
              <div className="pro">
                 <RiLockPasswordLine /> <p>Change Password</p>
              </div>
           </Link>
           <Link to="/login">
              <div className="pro">
                 <TbArrowBarRight /> <p>Logout</p>
              </div>
           </Link>
        </div>
     </div>
  );
}
