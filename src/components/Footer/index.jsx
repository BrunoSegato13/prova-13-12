import React from 'react';
import { MyFooter } from './styles';

//Images
import twitter from '../../assets/twitter.svg';
import whatssap from '../../assets/whatsapp.svg';
import instagram from '../../assets/instagram.svg';

function Footer() {
  return (
    <>
      <MyFooter>
        <div className="media">
          <div className="info">
            <legend>Contato</legend>
            <ul>
              <li>Email: dragonageforum@gmail.com</li>
              <li>Phone: +55 (45) 12345678</li>
              <li>Phone: +55 (45) 12345678</li>
            </ul>

          </div>
          <div className="social-media">
            <ul>
              <a href=""><img src={instagram} alt="instagram" /></a>
              <a href=""><img src={whatssap} alt="whatssap" /></a>
              <a href=""><img src={twitter}alt="twitter" /></a>
            </ul>
          </div>
        </div>
        
        <div className="Copyright">
          <hr />
          <p>Todos os direitos reservados &copy; Dragon Age Forum 2020</p>
        </div>
      </MyFooter>


    </>
  )
}

export default Footer;