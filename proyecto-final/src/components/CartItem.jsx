import React from 'react'
import { useCartContext } from './CartContextProvider'

const CartItem = ({item}) => {
    const {deleteById, removeOneUnit} = useCartContext();
const {title, quantity, price, id } = item


  return (
    <div>
        <h1>{title}</h1>
        <h4> Unidades: {quantity}</h4>
        <h4>Precio Unitario: $ {price}</h4>
        <img src={ item?.img } alt="Imagen del producto" />
        <button onClick={() => removeOneUnit(id)}> Eliminar 1 </button>
        <button onClick={() => deleteById(id)}> Eliminar todo</button>
    </div>
  )
}

export default CartItem