/* eslint-disable no-unused-vars */
import React from 'react'
import "../assets/Css/Navbar.css";
import img from './imgs/logo.png'

const Navbar = () => {
  return (
    <div className="navC">
        <div className="nav_title">
            <img src={img} alt="img" className="logo_api"/>
        </div>
    </div>
  )
}

export default Navbar