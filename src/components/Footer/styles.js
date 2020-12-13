import styled from 'styled-components';


export const MyFooter = styled.footer`

  display: flex;
  flex-direction: column;
  background-color:#4d3232;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 20px;
  max-height: 150px;
  bottom:0;
  margin: 19px;

  border: 2px solid black;
  border-radius: 3px;
  
  
  
  .media{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  }

  .info{
    padding: 0;
    legend{ 
      font-size: 20px;
      font-weight: 500;
      color: black;
    }
    ul{
      list-style-type: none;
      margin: 10px 0 0 0;
      padding: 0;
      color: black;
      font-size: 16px;
    }
  }
  
  .social-media  img{
      height: 50px;
      padding: 5px;
}
  


.Copyright {
  
  p{
    text-align: center;
    color: black;
  }

  hr{
    border: 2px solid black;
  }
}

`;