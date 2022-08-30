import { useState } from "react";
import { Logo } from "./Logo";
import { FaSearch } from "react-icons/fa";
import { ProfileModal } from "./ProfileModal";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const username = localStorage.getItem("User");

  const getFormModal = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>

      <div className="search">
        <div className="sea">
          <FaSearch />
          <input type="text" placeholder="Search" className="seaIn" />
        </div>
      </div>

      <div onClick={getFormModal} className="profile">
        <div className="image"></div>
        <div className="name">
          <p>{username}</p>
        </div>
        {isActive && <ProfileModal />}
      </div>
    </div>
  );
};
