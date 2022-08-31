import React from 'react'
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import "./component.css"

export const UserModal = () => {
  return (
     <div className="profilemodal">
        <div className="personpic">
           <div className="pimg"></div>
           <div className="namework">
              <p>
                 <b>Yemi Alabi</b>
              </p>
              <p>Node Stack</p>
           </div>
        </div>
        <hr />
        <div className="personaction">
           <div className="pro">
              <BiUser /> <p>Account</p>
           </div>
           <Link to="/change_password">
              <div className="pro">
                 <AiOutlineSetting /> <p>Settings</p>
              </div>
           </Link>
           <Link to="/login">
              <div className="pro">
                 <BsArrowBarRight /> <p>Logout</p>
              </div>
           </Link>
        </div>
     </div>
  );
}
