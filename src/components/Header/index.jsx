import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {Menu } from './styles.js';

function Header(){

  return(
    <>
    
        <Menu>
                <Link to="/"><img src={logo} alt="Logo SnapPacking"
                /></Link>
              <ul className="menu-links">
                <li><Link to="#">O Game</Link></li>
                <li><a href="#">História</a></li>
                <li><a href="#">Personagens</a></li>
                <li><Link to="/newsLetter">News Letter</Link></li>
            </ul>
        </Menu>
        
    </>
    
  )
}

export default Header;