import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { FaSearch } from "react-icons/fa";
import { ProfileModal } from "./ProfileModal";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({ name: "", image: "" });

  const getFormModal = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  useEffect(() => {
    const username = localStorage.getItem("User") as string;
    let imageUrl = localStorage.getItem("imageurl");
    if (!imageUrl) {
      setUser((prev) => ({ ...prev, image: "./assets/images/scoreavatar.png" }));
    }
    setUser((user) => ({ ...user, name: username!, image: imageUrl! }));
  }, []);

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
        <div className="image">
          <img
            src="./assets/images/scoreavatar.png"
            alt=""
            style={{ width: "40px", height: "40px", borderRadius: "5px" }}
          />
        </div>
        <div className="name">
          <p>{user.name}</p>
        </div>
        {isActive && <ProfileModal />}
      </div>
    </div>
  );
};
