import React,{useState} from 'react'
import { Logo } from './Logo';
import { UserModal } from './UserModal';
import "./../layout/DashboardLayout/DashboardLayout.css"

export const Userheader = () => {

  const [isActive, setIsActive] = useState(false);
  const username = localStorage.getItem("User");
  const imageUrl = localStorage.getItem("imageurl");

     const getFormModal = () => {
        if (isActive) setIsActive(false);
        else setIsActive(true);
     };

  return (
     <div className="userheader">
        <div className="logo">
           <Logo />
        </div>

        <div onClick={getFormModal} className="profile">
        {imageUrl !== "undefined" ? (
          <div className="image">
            <img
              src="./assets/images/scoreavatar.png"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            />
          </div>
        ) : (
          <div className="image">
            <img
              src={imageUrl}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            />
          </div>
        )}
           <div className="name">
              <p>{username}</p>
           </div>

           {isActive && <UserModal />}
        </div>
     </div>
  );
}
