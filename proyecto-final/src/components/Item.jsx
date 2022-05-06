import React from 'react'
import { Link } from 'react-router-dom';

import './Item.css';

function Item( {productos} ) {
  return (
    <div className='card'>
        <h1>{productos.title}</h1>
         <img src= {productos.img} />
        <h3>Categoria: {productos.categoria}</h3>
        <p className='price'>$ {productos.price}</p>
        <p> Material {productos.categoria}</p>

        <Link to={'/item/' + productos?.id}> Descripcion </Link>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

export default Item


 
  
  
  
 
