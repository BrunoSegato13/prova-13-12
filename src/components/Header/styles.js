import styled from 'styled-components';


export const Menu = styled.header`

display: flex;
flex-direction: row;

align-items: center;
justify-content: space-between;
background-color:#4d3232;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;

 img{
   width: 100px;
 }

 ul{
   display: flex;
   flex-direction: row;
   list-style: none;
   

   li{
     padding: 20px;
     

     a {
       color: black;
       text-decoration: none;
       font-size: 20px;
       font-weight: 700;
       transition-delay: 50ms;

       &:hover{
        color: #915454;
       }
     }
   }
 }

`;


//#960f0f
//#4d3232
//#242222