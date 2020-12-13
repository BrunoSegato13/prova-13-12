import styled from 'styled-components';
import img from '../../assets/dragonAge.jpg';


export const Content = styled.div`

  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 1000px; 
  margin: 19px;

  background-image: url(${img});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  object-fit: cover;

  justify-content: center;
  align-items: center;
  
  h1{
    color: #918a8a;
    font-size: 42px;
    font-weight: 800;
  }
  p{
    color:  #918a8a;
    font-size: 32px;
    font-weight: 500;
  }

`;



//#960f0f
//#4d3232
//#242222