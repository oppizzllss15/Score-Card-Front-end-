import React from "react";
import { logoutUser } from "../utils/api";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./component.css";

export const UserModal = () => {
  const firstname = localStorage.getItem("User");
  const lastname = localStorage.getItem("lastname");
  const imageUrl = localStorage.getItem("imageurl") || "./assets/images/scoreavatar.png";
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
              style={{ width: "65px", height: "65px", borderRadius: "5px" }}
            />
          </div>
        ) : (
          <div className="pimg">
            <img
              src={imageUrl}
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
          <p>Node Stack</p>
        </div>
      </div>
      <hr />
      <div className="personaction">
        <div className="pro">
          <BiUser /> <p>Account</p>
        </div>
        <Link to="/">
          <div className="pro">
            <AiOutlineSetting /> <p>Settings</p>
          </div>
        </Link>
        <Link to="/login">
          <div className="pro">
            <BsArrowBarRight /> <p onClick={handleChange}>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
