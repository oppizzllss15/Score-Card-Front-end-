import React from 'react';
import { Logo } from './Logo';
import { FaSearch } from 'react-icons/fa';

export const Header = () => {
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

        <div className="profile">
           <div className="image"></div>
           <div className="name">
              <p>User</p>
           </div>
        </div>
     </div>
  );
}
