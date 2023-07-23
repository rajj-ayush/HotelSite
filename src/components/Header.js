import React from 'react'
import "./Header.css"
import Logo from "../assets/logo.png";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
    <Link to="/" style={{ textDecoration: 'none'}}>
    <img className='header__logo' alt="" src={Logo} />
    </Link>
    <div className='header__center'>
        <div className='center__button'>Home</div>
        <div className='center__button'>Rooms & Suits</div>
        <div className='center__button'>Offers</div>
        <div className='center__button'>My Bookings</div>
        <div className='center__button'>Profile</div>
            </div>
                  <div className='header__right'>
                       <div className='headerContainer'>
                           <Button className='header__button'>Sign Up</Button>
                      </div>
                  </div>


    </div>
  )
}

export default Header
