import React,{useState} from 'react'
import { Logo } from './Logo';
import { UserModal } from './UserModal';
import "./../layout/DashboardLayout/DashboardLayout.css"

export const Userheader = () => {

  const [isActive, setIsActive] = useState(false);

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
           <div className="image"></div>
           <div className="name">
              <p>User</p>
           </div>

           {isActive && <UserModal />}
        </div>
     </div>
  );
}
