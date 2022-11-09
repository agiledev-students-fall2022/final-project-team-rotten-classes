import './Header.css'
import logo from './images/logo2.png'
import React, {useEffect, useState} from 'react';

const Header = props => {
  return (
       
    <header className="Header-header">
        <a href='/'>
            <img src={logo} alt="Our Logo"/>
        </a>
    </header>
  )
}

export default Header