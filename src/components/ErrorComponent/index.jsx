import React from 'react';
import { Link } from 'react-router-dom';
import { MyError } from './styles';

import img from '../../assets/errorImg.svg'

function ErrorComponet(){
  return(
    <>
     <MyError> 
         <div>
         <h1>Error 404!</h1>
          <p>A página que você está tentando acessar não existe!</p>            
          <Link to="/">Página inicial</Link>
         </div>   
         <img src={img} alt="Morrigan"/>

      </MyError>
    </>
  )

}

export default ErrorComponet;