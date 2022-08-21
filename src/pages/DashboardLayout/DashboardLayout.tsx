import React from 'react'
import { Logo } from '../../Components/Logo'
import { FaSearch } from "react-icons/fa";
import "./DashboardLayout.css"

export const DashboardLayout = () => {
  return (
    <div className='dash'>

      <div className="navbar">
        <div className="logo">
          <Logo />
        </div>

        <div className="search">
            
          <div className='sea'>
            <FaSearch />
            <input type="text" placeholder='search'  className='seaIn'/>
          </div>

        </div>


        <div className="profile">
          <div className="image"></div>
          <div className='name'><p>Cherish</p></div>
        </div>

      </div>


    </div>
  )
}
