import styled from 'styled-components';

export const MyForm = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 19px;
  padding: 30px;

  img{
    border-radius: 5px;
    height: 100%;
  }

  label{
    display: flex;
    flex-direction: column;
    
    span{
      color: #918a8a;
      font-size: 18px;
      font-weight: 400;

    }
    input{
      background-color: #915454;
      text-align: center;
      padding: 3px;
      height: 20px;
      border: 1px solid black;
      border-radius: 3px;
      min-width: 200px;
    }
    
  }
  button{
    display: flex;
    margin: 8px auto;
    background-color: #915454;
    color: black;
    font-size: 16px;
    border: 1px solid black;
      border-radius: 3px;
    }

    div{
      color: #918a8a;

      label{
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        input{
          min-width: 15px;
        }
        span{
          padding: 0px;
          font-size: 12px;
          flex-direction: end;
        }
        
      }
    }

    p{
      font-size: 12px;
      color: #918a8a;
      max-width: 200px;
    }
  

`;