import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
 const global = React.useContext(GlobalContext)
 
 if(global.dados === null) return null;
 console.log(global)
  return (
    <div>
      Produt: {global.dados.map((item) => (
        <ul key={item.id}>
          <li >{item.nome}</li>
        </ul>
      ))} 
     
    </div>
  )
}

export default Produto
