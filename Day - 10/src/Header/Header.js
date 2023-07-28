import React from 'react';
import './header.css';
import Logo from "../Logo.png";


const Header = () => {
 
  return (
    <div className='header'>
      <img src= {Logo} alt='' className='logo' />
      <ul className='header-menu'>
        <li>Home</li>
        <a href='#programs'><li>Programs</li></a>
        

      </ul>
    </div>
  )
}

export default Header
