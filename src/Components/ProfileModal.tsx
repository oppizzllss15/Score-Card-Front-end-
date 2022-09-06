import React from "react";
import { logoutUser } from "../utils/api";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbArrowBarRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import "./component.css";

export const ProfileModal = () => {
  const firstname = localStorage.getItem("User");
  const lastname = localStorage.getItem("lastname");
  const role = localStorage.getItem("role");
  const imageUrl = localStorage.getItem("imageurl");
  const navigate = useNavigate();

  const handleChange = async () => {
    await logoutUser();
    localStorage.setItem("token", "");
    localStorage.setItem("Id", "");
    localStorage.setItem("User", "");
    localStorage.setItem("lastname", "");
    localStorage.setItem("role", "");
    navigate("/");
  };
  return (
    <div className="profilemodal">
      <div className="personpic">
        {imageUrl === "undefined" ? (
          <div className="pimg">
            <img
              src="./assets/images/scoreavatar.png"
              alt=""
              style={{ width: "65px", height: "65px", borderRadius: "50%" }}
            />
          </div>
        ) : (
          <div className="pimg">
            <img
              src="./assets/images/scoreavatar.png"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            />
          </div>
        )}
        <div className="namework">
          <p>
            <b>
              {firstname} {lastname}
            </b>
          </p>
          <p>{role}</p>
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
            <TbArrowBarRight /> <p onClick={handleChange}>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
