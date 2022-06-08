import React from 'react'
import { Link } from 'react-router-dom';

import './Item.css';

function Item( {productos} ) {
  return (
    <div className='card'>
        <h1>{productos.title}</h1>
         <img src= {productos.img} />
         {productos.categoria}
        <p className='price'>$ {productos.price}</p>
        {productos.categoria}

        <Link to={'/item/' + productos?.id}> <button>Descripcion</button> </Link>
        
    </div>
  )
}

export default Item


 
  
  
  
 
