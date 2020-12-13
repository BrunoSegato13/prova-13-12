import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewsLetter() {

  const [user, setUser] = useState({});

  function onChange(event){

    const {name, value} = event.target;
    setUser({...user, [name]: value});
    
  
  }

  function onSubmit(event){

    event.preventDefault();
    console.log(user);
  }

  return (
    <>
      <Header/>
        <form onSubmit={onSubmit}>
          <div>
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
            <label htmlFor="age">
            <span>Age:</span>
              <input
                id='age'
                type='date'
                name='age'
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      <Footer/>
    </>
  )

}

export default NewsLetter;
