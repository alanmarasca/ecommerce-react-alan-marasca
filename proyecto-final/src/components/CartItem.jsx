import React from 'react'
import { useCartContext } from './CartContextProvider'
import './CartItem.css'
const CartItem = ({item}) => {
    const {deleteById, removeOneUnit} = useCartContext();
const {title, quantity, price, id } = item


  return (
    <div className='BigContainer'>
      <div className='SecondContainer'>
        <div className='Imagen'>
          <img src={ item?.img } className='imagen-t' alt="Imagen del producto" />
        </div>
        <div className='datos'>
          <div className='card-body'>
          <h5 className='CardTitulo'>{title}</h5>
          <p className='Card-Text'> Unidades: {quantity}</p>
           <p className='Card-Text'>Precio Unitario: $ {price}</p>
        
           <button className='BigContain' onClick={() => removeOneUnit(id)}> Eliminar 1 </button>
           <button className='BigContain' onClick={() => deleteById(id)}> Eliminar todo</button>



          </div>

        </div>

      </div>
       
    </div>
  )
}

export default CartItem