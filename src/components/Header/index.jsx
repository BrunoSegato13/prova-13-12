import React from 'react';
import logo from '../../assets/logo.png';
import {Menu } from './styles.js';

function Header(){

  return(
    <>
    
        <Menu>
                <img src={logo} alt="Logo SnapPacking"/>
            <ul className="menu-links">
                <li><a href="#">O Game</a></li>
                <li><a href="#">História</a></li>
                <li><a href="#">Personagens</a></li>
                <li><a href="#">Sobre Nós</a></li>

            </ul>
        </Menu>
        
    </>
    
  )
}

export default Header;