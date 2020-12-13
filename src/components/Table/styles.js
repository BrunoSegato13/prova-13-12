import styled from 'styled-components';

export const MyTable = styled.table`

 margin: auto;
 border: 2px solid black;
 
 h2{
  color: #918a8a;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  }

  hr{
    border-color: black;
  }
 table {
  width: 80vw;
  color: #918a8a;
  
  thead{

    th{
      
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: 700;
    }
  }
  
 }
 .Table-Content{
     td{
       padding: 20px;
       border: 1px   solid black;
      
       text-align: center;
       font-size: 18px;
       font-weight: 400;
      
       img{
         height:70px;
         min-width: 70px;
         border-radius: 50px;
       }
     }
 }

`;

