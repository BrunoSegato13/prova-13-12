import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Img from '../../assets/news.png';

import { MyForm }  from './styles';

function NewsLetter() {

  const [user, setUser] = useState({});
  const [check, setChek] = useState(true);

  function onChange(event){

    const {name, value} = event.target;
    setUser({...user, [name]: value});
    
  
  }

  function onSubmit(event){

    event.preventDefault();
    console.log(user);

  }

  function HandlleChange(event) {
    if(check == true){
      setChek(false);
      return;
    }
    setChek(true);
    

  }

  return (
    <>
      <Header/>
        <MyForm>
        <img src={Img} alt="Morrigan"/>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">
              <span>Nome:</span>
              <input
                id='name'
                type="text"
                name="name"
                onChange={onChange}
              />
            </label>
            <label htmlFor="email">
            <span>Email:</span>
              <input
                id='email'
                type="email"
                name="email"
                onChange={onChange}
              />
            </label>
            <label htmlFor="birth">
            <span>Data de nascimento:</span>
              <input
                id='birth'
                type='date'
                name='birth'
                onChange={onChange}
              />
            </label>
            <label htmlFor="phone">
            <span>Telefone:</span>
              <input
                id='phone'
                type='tel'
                name='phone'
                onChange={onChange}
              />
            </label>
            
            <button type="submit">Salvar</button>
          <div>
            <label  htmlFor="newsLetter">
              <input
                id='newsLetter'
                type= "checkbox"
                name='age'
                onChange={HandlleChange}
                
              />
              <span>Receber News Letter</span>
              
             
              
            </label>
          </div>
          {check ? <p>Não vai se inscrever?</p> : <p>
                Talvez o Archdemon o encontre 
                nos seus sonhos
              </p> }
            </form>
            
        </MyForm>
      <Footer/>
    </>
  )

}

export default NewsLetter;
