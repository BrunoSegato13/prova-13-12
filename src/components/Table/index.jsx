import React, { useState }from 'react';
import { MyTable } from './styles';
import Companions from '../../companion.json';



function Table() {

  const [companions, setCompanios] = useState(Companions);
  

   return (
    <>
      <MyTable>
        <h2>Companions</h2>
        <hr/>
      <table>
        <thead>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Raça</th>
          <th>Classe</th>
        </thead>
        <tbody className="Table-Content">
          {companions.map((companion, index)=>{
             return(
              <tr className="Table-Content" key={index}>
                <td><img src={companion.img} alt={companion.name}/></td>
                <td>{companion.name}</td>
                <td>{companion.race}</td>
                <td>{companion.class}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </MyTable>
    </>
  )

}

export default Table;
